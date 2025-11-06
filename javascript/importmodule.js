import { sum, sub, mul, div ,mod} from "./exportmodule.js";     //all logic in exportmodule.js will be present here after importng thta file
console.log("Addition:"+sum(10,20));
console.log("subtraction="+sub(25,15));
console.log("Multiplication="+mul(25,2));
console.log("division="+div(25,5));
console.log("modulus="+mod(11,2));