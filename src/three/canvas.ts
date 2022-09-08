import { CubeTextureLoader, WebGLRenderer, ACESFilmicToneMapping, sRGBEncoding } from "three";
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
  constructor(){
    // properties
    this.elCanvasRoot = document.querySelector('#canvasRoot')!;
    this.size = {x: this.elCanvasRoot.clientWidth, y: this.elCanvasRoot.clientHeight};
    this.renderer = new WebGLRenderer({alpha:true, antialias: true});
    this.experience = new Experience();

    //setup tonemapping
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    // output encdoding 
    this.renderer.outputEncoding = sRGBEncoding;


    // add hdri
    const env = new CubeTextureLoader().load([
      new URL('/assets/experience/hdri/px.png', import.meta.url).href,
      new URL('/assets/experience/hdri/nx.png', import.meta.url).href,
      new URL('/assets/experience/hdri/py.png', import.meta.url).href,
      new URL('/assets/experience/hdri/ny.png', import.meta.url).href,
      new URL('/assets/experience/hdri/pz.png', import.meta.url).href,
      new URL('/assets/experience/hdri/nz.png', import.meta.url).href,
    ])
    this.experience.scene.environment = env;

    //set renderer size;
    this.renderer.setSize(this.size.x, this.size.y);
    //attach to dom
    this.elCanvasRoot.appendChild(this.renderer.domElement);

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