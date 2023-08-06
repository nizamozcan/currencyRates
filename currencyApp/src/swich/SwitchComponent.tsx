import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, View, ViewStyle } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLanquage } from "../actions/action";
import { LocalStorageHelpers } from "../helper/LocalStorageHelpers";

export const SwitchComponent=({ onPress,style,visible,text }:{onPress?:()=>void,style?:ViewStyle,visible?:boolean,text:string})=>{
  const [isEnable,setIsEnable]=useState(false)

  const isAktifSwitch=async(asd:boolean)=>{
     await setIsEnable((x)=>!x)
    LocalStorageHelpers("ALTIN",true)

  }
  const updateLocalData=async(ddd:boolean)=>{

  }
  useEffect(()=>{
  },[isEnable])
  return(
    <Switch value={isEnable}  trackColor={{false:'white',true:'red'}}
            onValueChange={()=>isAktifSwitch(true)}
            style={style}/>
  )
}
const styles=StyleSheet.create({

})
