import { Mesh, Vector3 } from 'three';
import {UAParser} from 'ua-parser-js';
import {Experience} from './experience';

export class ARButton{
  constructor(){
    this.uaParser = new UAParser()
    this.experience = new Experience();
    this.reticle = this.experience.reticle; // get reticle
    this.arInSession = false;
    this.init(); 
    this.placedMicroscope = false;


    // hit testing vars
    this.hitTestSourceRequested = false;
    this.hitTestSource = null;
  }

  isMobile(){
    const os = this.uaParser.getOS();
    if(os.name === "Android" || os.name === "IOS"){
      return true;
    }else{
      return false;
    }
  }
  async isWebXRAble(){
    if(navigator.xr){
      if(await navigator.xr.isSessionSupported('immersive-ar')){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }
  // this is the main constructor
  async init(){
    // --- flowchart
    // if ios
    if(this.uaParser.getOS().name === "iOS"){ // is ios
      console.log('show ios usdz');
      this.showIOS();
    }else if(await this.isWebXRAble()){ // is android web xr able
      console.log('show web xr')
      this.showWebXR();
    }else{ // can't do ar at all
      console.log('show qr code')
      this.showQR();
    }
  }
  showQR(){document.querySelector('#AR-QRCode').classList.toggle('hide')}
  showIOS(){document.querySelector('#ARApple').classList.toggle('hide')}
  showWebXR(){document.querySelector('#ARWebXr').classList.toggle('hide'); this.initWebXR()}
  initWebXR(){
    // enable xr
    this.experience.renderCanvas.renderer.xr.enabled = true;
    // start button event listener
    document.querySelector('#ARWebXr').addEventListener('pointerup', this.startARSession);
    //back button event listener
    document.querySelector('#backARButton').addEventListener('pointerup', ()=>{this.experience.renderCanvas.renderer.xr.getSession().end()})
    // reposition ar event listnere
    document.querySelector('#replaceARButton').addEventListener('pointerup', ()=>{this.placedMicroscope = false; this.experience.modelLoader.model.visible = false});
    // spawn ar button listener
    document.querySelector('#spawnARButton').addEventListener('pointerup', ()=>{
      if(this.reticle.visible){
        const obj = this.experience.modelLoader.model;
        obj.visible = true;
        this.reticle.matrix.decompose(
          obj.position,
          obj.quaternion,
          obj.scale
        )
        obj.scale.set(0.4, 0.4, 0.4);
        this.placedMicroscope = true;
      }
    })
  }
  onXRSessionStart(session){
    console.log('ar started');
    const renderer = this.experience.renderCanvas.renderer;
    // setup xr 
    renderer.xr.setReferenceSpaceType('local');
    renderer.xr.setSession(session);
    // listen for xr end
    session.addEventListener('end', this.onXRSessionEnd.bind(this))

    // enable ar loop
    this.arInSession = true;

    // unhide dom overlay
    document.querySelector('#domOverlayRoot').classList.remove('hide');
    
    // handle microscope
    const obj = this.experience.modelLoader.model;
    // hide microscope
    obj.visible = false;
    // make smaller 
    obj.scale.set(0.5, 0.5, 0.5);
  }
  onXRSessionEnd(){
    console.log('ar ended');
    const renderer = this.experience.renderCanvas.renderer;
    // reset ar session
    renderer.xr.getSession()?.removeEventListener('end', this.onXRSessionEnd);
    renderer.xr.setSession(null);
    // disable ar loop
    this.arInSession = false;

    // hide dom overlay
    document.querySelector('#domOverlayRoot').classList.add('hide');

    // reset microscope
    const obj = this.experience.modelLoader.model;
    // show microscope
    obj.visible = true;
    // reset transofmations
    obj.position.set(0,0,0);
    obj.rotation.set(0,0,0);
    obj.scale.set(1,1,1);

    // reset camera
    this.experience.orbitCamera.shiftPosition(3, new Vector3(0,0.35,0.1));
  }
  startARSession(){
    const sessionOptions = {
      requiredFeatures: ['hit-test', 'dom-overlay'],
      domOverlay: {root:document.querySelector('#domOverlay')}
    }
    navigator.xr?.requestSession('immersive-ar', sessionOptions).then((session)=>{new Experience().arButton.onXRSessionStart(session)});
  }

  update(timeStamp, frame){
    if(this.arInSession){
      const renderer = this.experience.renderCanvas.renderer
      const referenceSpace = renderer.xr.getReferenceSpace();
      const session = renderer.xr.getSession();

      if(frame){

        if(!this.hitTestSourceRequested){
          session.requestReferenceSpace("viewer").then((refSpace)=>{
            session.requestHitTestSource({space:refSpace})?.then((source)=>{
              this.hitTestSource = source
            })
          });
          // on session end nullify the hit testing variables
          session.addEventListener('end', ()=>{this.hitTestSource = null; this.hitTestSourceRequested = false})
          // mark got hittest
          this.hitTestSourceRequested = true;
        }
      }

      if(this.hitTestSource){
        const hitTestResults = frame.getHitTestResults(this.hitTestSource);
        if(hitTestResults.length){ // surface detected;
          const hit = hitTestResults[0];
          //* --- handle ui visibilities
          if(this.placedMicroscope){
            // hide spawn button
            document.querySelector('#spawnARButton').classList.add('hide');
            // hide instruction
            document.querySelector('#arInstructions').classList.add('hide');
            // show re-position microscoptr
            document.querySelector('#replaceARButton').classList.remove('hide');
            // hide reticle
            this.reticle.visible = false;
          }else{
          this.reticle.visible = true;
          this.reticle.matrix.fromArray(hit.getPose(referenceSpace).transform.matrix);
          // show spawn button
          document.querySelector('#spawnARButton').classList.remove('hide');
          // hide instruction
          document.querySelector('#arInstructions').classList.add('hide');
          // hide  replace button
          document.querySelector('#replaceARButton').classList.add('hide');
          }
        }else{ // no surface detected
          // hide reticle
          this.reticle.visible = false;
          // hide spawn button
          document.querySelector('#spawnARButton').classList.add('hide');
          // show instruction
          document.querySelector('#arInstructions').classList.remove('hide');
          // hide re-position microscoptr
          document.querySelector('#replaceARButton').classList.add('hide');
        }
      }
    }
  }
}
