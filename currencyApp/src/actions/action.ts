import axios from "axios";
import { getValueDataFormat } from "../helper/FormatHelper";
import { tr } from "../languages/tr";
import { en } from "../languages/en";
import { useDispatch } from "react-redux";

export const SetCurrency=(currency:any)=>{
    return{
      type:"SET_CURRENCY",
      payload:currency
    }
}
export const getDataAction=async (url:string)=>{
  const data=await axios.get(url)
  let formatData=await getValueDataFormat(data.data)
  return formatData
}
export const setLanquage=(text:string)=>{

  let data=text=="en"?en:tr
  return {
      type: "SET_TR",
      payload: data
  };
}
export const SetCurrencyFavories=(currency:any)=>{
  return{
    type:"SET_FAVORIES",
    payload:currency
  }
}


