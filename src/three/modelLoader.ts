import { Experience } from "./experience"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"

export class ModelLoader{
  experience:Experience;
  model!:any;

  constructor(){
    this.experience = new Experience();
    this.loadModelAndTexture();
  }

  async loadModelAndTexture(){
    // get urls
    const modelUrl:string = new URL('/assets/experience/microscope/microscope.glb', import.meta.url).href;

    //load model
    const modelLoader = new GLTFLoader();
    modelLoader.load(modelUrl, (model)=>{ // on success
        // add model to scene
        this.model = model.scene;
        this.experience.scene.add(this.model);

        // remove loader from canvas
        this.experience.removeLoader();

        // show canvas UI overlays
        // show ar button
        document.querySelector('.arButtonsRoot')?.classList.toggle('hide');
        // show ar button
        document.querySelector('#canvasOverlay')?.classList.toggle('hide');
    });
  }
}