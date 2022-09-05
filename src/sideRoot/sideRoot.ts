export class SideRoot{
  elSlider:HTMLElement;
  elSlideButton:HTMLElement;
  elSVG:HTMLElement;
  elButtonText:HTMLElement;
  isDown:boolean;
  elBannerArrays:NodeListOf<Element>
  constructor(){
    //* --- props
    //elements 
    this.elSlider = document.querySelector('#sideRootSlider')!;
    this.elSlideButton = document.querySelector('#slideButton')!;
    this.elSVG = document.querySelector('#slideButton svg')!;
    this.elButtonText = document.querySelector('#slideButton div')!;
    this.elBannerArrays = document.querySelectorAll('.banners')!;
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

    //make banne slide down
    this.toggle();
  }
}