import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Experience } from "./experience";
import { PerspectiveCamera, Vector3 } from "three";
import gsap from "gsap";

const savedPositions:Array<Vector3> = [
  new Vector3(-0.3, 0.9, -0.2),
  new Vector3(0.35,0.55,-0.27),
  new Vector3(0,0.4,0.4),
  new Vector3(0.7,0.5,0.7) // this is the start position
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

    // opening animartions
    this.camera.position.set(0,0,-5);
    // set initiaal posiiton
    this.shiftPosition(3, new Vector3(0,0.35,0.1));
    
  }

  shiftPosition(index:number, target:Vector3){
    if(!this.orbitControls.enabled){return}

    const pos = savedPositions[index];
    //disable controlls
    this.orbitControls.enabled = false;
    // fix targets
    gsap.to(this.orbitControls.target,{
      duration: 1,
      x: target.x, y: target.y, z: target.z
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