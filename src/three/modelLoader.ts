import { Experience } from "./experience"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import { Group } from "three";

export class ModelLoader{
  experience:Experience;
  loader!:GLTFLoader;
  model!:Group;

  constructor(url:string){
    this.experience = new Experience();
    this.loader = new GLTFLoader();
    this.loader.load(url,
      (gltf)=>{ // on success
        console.log('successfully loaded model')
        this.experience.scene.add(gltf.scene)
        this.model = gltf.scene;
        // tell experience microscope is loaded;
        this.experience.removeLoader();
        
        // show canvas UI overlays
        // show ar button
        document.querySelector('.arButtonsRoot')?.classList.toggle('hide');
        // show ar button
        document.querySelector('#canvasOverlay')?.classList.toggle('hide');
      }
    )
  }
}