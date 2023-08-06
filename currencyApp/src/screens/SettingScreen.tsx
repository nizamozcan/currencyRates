import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/cards/Header";
import { SelectList } from 'react-native-dropdown-select-list'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLanquage } from "../actions/action";

export const SettingScreen=()=>{
  const {Lanquage}=useSelector(state=>state)
  const dispatch=useDispatch()
  const [selected, setSelected] = useState(Lanquage.this_lanquage);
  let data=["tr","en"]

  const storeData=async()=>{
    try {
      await AsyncStorage.setItem('lanquage',selected)
      dispatch(setLanquage(selected))
    }
    catch (error){
    }
  }
  useEffect(()=>{
    if(Lanquage.this_lanquage!=selected){
      storeData()

    }
  },[selected])
  return(
    <SafeAreaView style={{flex:1}}>
      <Header title={Lanquage.settings} />
      <View style={{flex:1,margin:5}}>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          placeholder={Lanquage.this_lanquage}
        />
      </View>


    </SafeAreaView>
  )
}
