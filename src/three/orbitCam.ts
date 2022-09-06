import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Experience } from "./experience";
import { PerspectiveCamera, Vector3 } from "three";
import gsap from "gsap";

const savedPositions:Array<Vector3> = [
  new Vector3(2,2,2),
  new Vector3(-1,1,1),
  new Vector3(2,-2,2)
]

export class OrbitCamera{
  experience:Experience;
  camera!:THREE.PerspectiveCamera;
  orbitControls!:OrbitControls;

  constructor(){
    this.experience = new Experience();
    this.camera = new PerspectiveCamera(
      75,
      this.experience.renderCanvas.size.x/this.experience.renderCanvas.size.y,
      0.1,
      1000
    );
    this.orbitControls = new OrbitControls(this.camera, this.experience.renderCanvas.renderer.domElement);
  }

  shiftPosition(index:number){
    const pos = savedPositions[index];
    //disable controlls
    this.orbitControls.enabled = false;
    // fix targets
    gsap.to(this.orbitControls.target,{
      duration: 1,
      x: 0, y: 0, z: 0
    });
    //start animation and re-enabled controls onfinished
    gsap.to(this.camera.position, {
        duration:1,
        x: pos.x,
        y: pos.y,
        z: pos.z,
        onComplete:()=>{this.orbitControls.enabled=true}});
  }

  update(){
    this.orbitControls.update()
  }
}