const INITIAL_STATE={
  currency:"asd"
}

export default (state=INITIAL_STATE,action:any)=>{
  switch (action.type){
  case "SET_CURRENCY":
    return{currency:action.payload}
    break;
  default:
    return state
}

}
