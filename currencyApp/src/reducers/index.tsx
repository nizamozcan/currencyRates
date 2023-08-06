import {combineReducers} from "redux";
import DataReducer from "./DataReducer";
import LanquageReducer from "./LanquageReducer";
import dataReducer from "./DataReducer";
import lanquageReducer from "./LanquageReducer";
export default combineReducers({
  GeneralDataReduces:dataReducer,
  Lanquage:lanquageReducer
})
