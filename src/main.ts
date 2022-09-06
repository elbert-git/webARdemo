import { Experience } from "./three/experience";
import { SideRoot } from "./sideRoot/sideRoot";

// start 3d canvas
const experience = new Experience();
// sideRoot logic should only run on mobile
const sideRoot = new SideRoot()


// this is to tell the ts compiler to shut up
if(false) {console.log(experience, sideRoot);}