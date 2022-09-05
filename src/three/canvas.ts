import { WebGLRenderer } from "three";
import { Experience } from "./experience";


interface Size{
  x:number,
  y:number
}

export class RenderCanvas{
  elCanvasRoot:HTMLElement;
  size:Size;
  renderer:WebGLRenderer;
  //canvas
  //renderer
  constructor(){
    // properties
    this.elCanvasRoot = document.querySelector('#canvasRoot')!;
    this.size = {x: this.elCanvasRoot.clientWidth, y: this.elCanvasRoot.clientHeight};
    this.renderer = new WebGLRenderer({alpha:true});

    //set renderer size;
    this.renderer.setSize(this.size.x, this.size.y);
    //attach to dom
    this.elCanvasRoot.appendChild(this.renderer.domElement);

    // event listneers
    window.addEventListener('resize', ()=>{this.resizeCanvas()});
  }

  resizeCanvas(){
    this.size = {x: this.elCanvasRoot.clientWidth, y: this.elCanvasRoot.clientHeight};
  }
}