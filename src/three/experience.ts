import * as THREE from 'three';
import { RenderCanvas } from './canvas';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';


// allow singleton class
let instance:Experience|null = null;

export class Experience{
  // typecasting
  camera!:THREE.Camera;
  renderCanvas!:RenderCanvas;
  scene!:THREE.Scene;
  testCube!:THREE.Mesh;
  orbControls!:OrbitControls;
  elCanvasRoot!:HTMLElement

  constructor(){
    // handle singletons
    if(instance){return instance}
    instance = this;

    //get elemeents
    this.elCanvasRoot = document.querySelector('#canvasRoot')!;

    //setup scene
    this.renderCanvas = new RenderCanvas();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.renderCanvas.size.x/this.renderCanvas.size.y,
      0.1,
      1000
    );
    this.camera.position.set(0,0,1); // cam default position
    this.orbControls = new OrbitControls(this.camera, this.renderCanvas.renderer.domElement);

    // create test geo
    this.testCube = new THREE.Mesh(
      new THREE.BoxGeometry(0.2,0.2,0.2),
      new THREE.MeshBasicMaterial({color: 0xFFFF00})
    )
    this.scene.add(this.testCube);

    // start render loop
    this.renderCanvas.renderer.setAnimationLoop(()=>{this.update()});
  }

  update(){
    this.renderCanvas.renderer.render(this.scene, this.camera)
  }
}
