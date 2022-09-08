import * as THREE from 'three';
import { RenderCanvas } from './canvas';
import { OrbitCamera } from './orbitCam';
import { Label } from './label';
import { Group, Vector3 } from 'three';
import { ModelLoader } from './modelLoader';
import { ARButton } from './arButton';



// allow singleton class
let instance:Experience|null = null;

export class Experience{
  // typecasting
  orbitCamera!:OrbitCamera;
  renderCanvas!:RenderCanvas;
  scene!:THREE.Scene;
  elCanvasRoot!:HTMLElement;
  labels!:Array<Label>;
  modelLoader!:ModelLoader;
  keylight!:THREE.DirectionalLight;
  hemisphere!:THREE.HemisphereLight;
  arButton!:ARButton;
  reticle!:Group;


  constructor(){
    // handle singletons
    if(instance){return instance}
    instance = this;

    //get elemeents
    this.elCanvasRoot = document.querySelector('#canvasRoot')!;

    //setup scene
    this.scene = new THREE.Scene();
    this.renderCanvas = new RenderCanvas();
    this.orbitCamera = new OrbitCamera();
    this.orbitCamera.camera.position.set(0,0,1); // cam default position
    
    // import microscope geometry
    this.modelLoader = new ModelLoader();

    // creat and handle reticle
    this.reticle = new THREE.Group();
    const reticleMesh = new THREE.Mesh(
      new THREE.RingGeometry(0.05, 0.06, 32),
      new THREE.MeshBasicMaterial({color: 0xffffff})
    )
    reticleMesh.rotateOnAxis(new THREE.Vector3(1,0,0), -1.5708 )
    this.reticle.add(reticleMesh);
    this.reticle.visible = false;
    this.reticle.matrixAutoUpdate = false;
    this.scene.add(this.reticle);

    // create label
    this.labels = [
      new Label(new Vector3(-0.08, 0.63, 0.02), "Simple To Use", "No complicated dials or settings. Simply look through it and focus"),
      new Label(new Vector3(0.05, 0.48, -0.1), "Kid-Proof", "Built with strong and durable materials for very hands-on learning"),
      new Label(new Vector3(0.0, 0.33, 0.2), "For the classroom", "Designed for schools, with interchangeable components and available for bulk orders"),
    ]

    // start ar button
    this.arButton = new ARButton();

    // start render loop
    this.renderCanvas.renderer.setAnimationLoop((timeStamp, frame)=>{this.update(timeStamp, frame)});
  }

  update(timeStamp:any, frame:any){
    //cam updates
    this.orbitCamera.orbitControls.update();

    // label positions
    this.labels.forEach(label => {
      label.update();
    });


    // AR loop
    this.arButton.update(timeStamp, frame);

    // render
    this.renderCanvas.renderer.render(this.scene, this.orbitCamera.camera)
  }

  removeLoader(){
    document.querySelector('#loadingRoot')?.classList.add('hide');
  }
}
