import * as THREE from 'three';
import { RenderCanvas } from './canvas';
import { OrbitCamera } from './orbitCam';
import { Label } from './label';
import { Vector3 } from 'three';
import { ModelLoader } from './modelLoader';
// import microscopeModel from '/assets/experience/microscope/microscope.glb';


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


  constructor(){
    // handle singletons
    if(instance){return instance}
    instance = this;

    const url = new URL('/assets/experience/microscope/microscope.glb', import.meta.url).href
    console.log(url);

    //get elemeents
    this.elCanvasRoot = document.querySelector('#canvasRoot')!;

    //setup scene
    this.scene = new THREE.Scene();
    this.renderCanvas = new RenderCanvas();
    this.orbitCamera = new OrbitCamera();
    this.orbitCamera.camera.position.set(0,0,1); // cam default position
    
    // import geometry
    // const url = new URL('/assets/experience/microscope/microscope.glb', import.meta.url).href
    // console.log(url);
    this.modelLoader = new ModelLoader(url);

    // start render loop
    this.renderCanvas.renderer.setAnimationLoop(()=>{this.update()});

    // create label
    this.labels = [
      new Label(new Vector3(-0.1, 0.63, 0.02), "Simple To Use", "No complicated dials or settings. Simply look through it and focus"),
      new Label(new Vector3(0.05, 0.5, -0.1), "Kid-Proof", "Built with strong and durable materials for very hands-on learning"),
      new Label(new Vector3(0.0, 0.35, 0.2), "For the classroom", "Designed for schools, with interchangeable components and available for bulk orders"),
    ]
  }

  update(){
    //cam updates
    this.orbitCamera.orbitControls.update();

    // label positions
    this.labels.forEach(label => {
      label.update();
    });

    // render
    this.renderCanvas.renderer.render(this.scene, this.orbitCamera.camera)
  }

  removeLoader(){
    document.querySelector('#loadingRoot')?.classList.add('hide');
  }
}
