const INITIAL_STATE={
  favories:"asd"
}

export default (state=INITIAL_STATE,action:any)=>{
  switch (action.type){
    case "SET_FAVORIES":
      return{currency:action.payload}
      break;
    default:
      return state
  }

}
