import * as THREE from 'three';
import { RenderCanvas } from './canvas';
import { OrbitCamera } from './orbitCam';
import { Label } from './label';
import { Vector3 } from 'three';
import { ModelLoader } from './modelLoader';
// import microscopeModel from '/assets/experience/microscope/scene.gltf?url';


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

    //get elemeents
    this.elCanvasRoot = document.querySelector('#canvasRoot')!;

    //setup scene
    this.scene = new THREE.Scene();
    this.renderCanvas = new RenderCanvas();
    this.orbitCamera = new OrbitCamera();
    this.orbitCamera.camera.position.set(0,0,1); // cam default position
    
    // import geometry
    const url = new URL('/assets/experience/microscope/microscope.glb', import.meta.url).href
    this.modelLoader = new ModelLoader(url);

    // create lighting
    this.keylight = new THREE.DirectionalLight(0xFFFFFF, 3);
    this.scene.add(this.keylight);
    const helper = new THREE.DirectionalLightHelper(this.keylight, 1);
    this.scene.add(helper);

    //test light reticle
    const geoTest = new THREE.Mesh(
      new THREE.BoxGeometry(0.01, 0.01, 0.01),
      new THREE.MeshBasicMaterial({color: 0x000000})
    )
    this.scene.add(geoTest);
    this.keylight.target = geoTest;

    // start render loop
    this.renderCanvas.renderer.setAnimationLoop(()=>{this.update()});

    // create label
    this.labels = [
      new Label(new Vector3(0, 0, 0), "Title 1", "Text body body body"),
      new Label(new Vector3(-0.3, 0.1 ,0.1), "Title 2", "Text body body body"),
      new Label(new Vector3(0.1, -0.3, 0.1), "Title 3", "Text body body body"),
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
}
