import { CubeTextureLoader, WebGLRenderer } from "three";
import { Experience } from "./experience";

interface Size{
  x:number,
  y:number
}

export class RenderCanvas{
  elCanvasRoot:HTMLElement;
  size:Size;
  renderer:WebGLRenderer;
  experience:Experience;
  cubeTextureLoader!:CubeTextureLoader;
  //canvas
  //renderer
  constructor(){
    // properties
    this.elCanvasRoot = document.querySelector('#canvasRoot')!;
    this.size = {x: this.elCanvasRoot.clientWidth, y: this.elCanvasRoot.clientHeight};
    this.renderer = new WebGLRenderer({alpha:true});
    this.experience = new Experience();

    //set renderer size;
    this.renderer.setSize(this.size.x, this.size.y);
    //attach to dom
    this.elCanvasRoot.appendChild(this.renderer.domElement);

    // add hdri
    const env = new CubeTextureLoader().load([
      new URL('/assets/experience/hdri/px.png', import.meta.url).href,
      new URL('/assets/experience/hdri/nx.png', import.meta.url).href,
      new URL('/assets/experience/hdri/py.png', import.meta.url).href,
      new URL('/assets/experience/hdri/ny.png', import.meta.url).href,
      new URL('/assets/experience/hdri/pz.png', import.meta.url).href,
      new URL('/assets/experience/hdri/nz.png', import.meta.url).href,
    ])
    console.log(this.experience.scene);
    this.experience.scene.environment = env;

    // event listneers
    window.addEventListener('resize', ()=>{this.resizeCanvas()});
  }

  resizeCanvas(){
    //update size
    this.size = {x: this.elCanvasRoot.clientWidth, y: this.elCanvasRoot.clientHeight};
    //update camera
    this.experience.orbitCamera.camera.aspect = this.size.x/this.size.y;
    this.experience.orbitCamera.camera.updateProjectionMatrix();
    // update renderer
    this.renderer.setSize(this.size.x, this.size.y);
    //set pixel ratio
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}