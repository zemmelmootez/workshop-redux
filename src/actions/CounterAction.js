import { INCRIMENT,DECRIMENT } from "./types";
export const incriment=()=>{
    return{
        type:INCRIMENT
    }
}
export const decrement=()=>{
    return{
        type:DECRIMENT
    }
}