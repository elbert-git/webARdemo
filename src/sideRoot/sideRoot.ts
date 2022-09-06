import { Experience } from "../three/experience";

export class SideRoot{
  elSlider:HTMLElement;
  elSlideButton:HTMLElement;
  elSVG:HTMLElement;
  elButtonText:HTMLElement;
  isDown:boolean;
  elBannerArrays:NodeListOf<Element>
  experience:Experience;

  constructor(){
    //* --- props
    //elements 
    this.elSlider = document.querySelector('#sideRootSlider')!;
    this.elSlideButton = document.querySelector('#slideButton')!;
    this.elSVG = document.querySelector('#slideButton svg')!;
    this.elButtonText = document.querySelector('#slideButton div')!;
    this.elBannerArrays = document.querySelectorAll('.banners')!;
    this.experience = new Experience();
    // state
    this.isDown = true;

    // *button Event listener
    //slider buttons
    this.elSlideButton.addEventListener('pointerup', ()=>{this.toggle();})
    // banner buttons
    this.elBannerArrays.forEach((el, index) => {
      el.addEventListener('pointerup', ()=>{this.bannerClicked(index)})
    });
  }

  toggle():void{
    // toggle slide up and down
    this.elSlider.classList.toggle('sideRootDown');

    // change text
    if(this.elButtonText.innerHTML === "Slide Up"){
      this.elButtonText.innerHTML = "Slide Down";
    }else{
      this.elButtonText.innerHTML = "Slide Up";
    }

    // rotate svg
    this.elSVG.classList.toggle('svgRotate');

    //update state
    this.isDown = !this.isDown;
  }

  bannerClicked(index:number):void{
    console.log('clicked banner ', index);

    this.experience.orbitCamera.shiftPosition(index, this.experience.labels[index].position);

    //make banne slide down

    if(!this.isDown){
      this.toggle();
    }
  }
}