import { tr } from '../languages/tr'
import { en } from "../languages/en";
const INITIAL_STATE=en

export default (state=INITIAL_STATE,action:any)=>{
  switch (action.type){
    case "SET_EN":
      return action.payload
      break;
    case "SET_TR":
      return action.payload
      break;
    default:
      return state
  }
}
