import { Vector3, Raycaster } from "three"
import { Experience } from "./experience";

let indexCounter = 0;

interface screenPos{
  x:number,
  y:number
}

export class Label{
  position!:Vector3;
  experience:Experience;
  elCanvasOverlay:HTMLElement;
  id:number;
  htmlElement:HTMLElement;
  rayCaster!:Raycaster;

  constructor(pos:Vector3, titleText:string, bodyText:string){
    this.position = pos;
    this.experience = new Experience();
    this.elCanvasOverlay = document.querySelector('#canvasOverlay')!;
    this.id = indexCounter; indexCounter+=1; // iterate index counter for reference
    this.rayCaster = new Raycaster();

    // create html elemtent
    this.htmlElement = document.createElement('div');
    this.htmlElement.classList.add('labelDivHolder');
    // const textNode = document.createTextNode(this.createHTMLTemplate(titleText, bodyText));
    this.htmlElement.innerHTML = this.createHTMLTemplate(titleText, bodyText);
    // this.htmlElement.appendChild(textNode);
    this.elCanvasOverlay.appendChild(this.htmlElement);


    this.htmlElement.addEventListener('pointerup', ()=>{
      this.experience.orbitCamera.shiftPosition(this.id, this.experience.labels[this.id].position);
    })

  }

  toggleVisibility(seen:boolean):void{
    if(seen){
      this.htmlElement.children[0].classList.remove('invisible');
    }else{
      this.htmlElement.children[0].classList.add('invisible');
    }
  }

  update(){
    if(!this.experience.modelLoader.model){return}
    //* --- screen position
    // get normalized screen position
    const normScreenPos = this.position.clone();
    normScreenPos.project(this.experience.orbitCamera.camera);
    // get absolute screen position
    const absScreenPos:screenPos = {
      x: (normScreenPos.x+1) * this.experience.renderCanvas.size.x/2,
      y: (-normScreenPos.y+1) * this.experience.renderCanvas.size.y/2,
    }
    // change position of html
    this.htmlElement.style.transform = `translate(${absScreenPos.x}px, ${absScreenPos.y}px)`

    //* --- check visibility
    // shoot ray
    this.rayCaster.setFromCamera(
      normScreenPos,
      this.experience.orbitCamera.camera
      );
    const intersects = this.rayCaster.intersectObject(this.experience.modelLoader.model, true);
    // check ray
    if(intersects.length === 0){
        this.toggleVisibility(true);
    }
    else{ 
      const intesectionDistance = intersects[0].distance;
      const pointDistance = this.position.distanceTo(this.experience.orbitCamera.camera.position);

      if(intesectionDistance  < pointDistance){
        this.toggleVisibility(false);
      }else{
        this.toggleVisibility(true);
      }
    }
  }


  createHTMLTemplate(title:string, body:string):string{
    return `
    <div id="label${this.id.toString()}" class="labelRoot overlayInput  ">
      <div class="labelNode display flex flexAlignCenter flexJustifyCenter roboto">i</div>
      <div class="labelTextPanel noInput ">
        <h3 class="lato">${title}</h3>
        <p class="lato">${body}</p>
      </div>
    </div>
    `
  }
}