import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export const Favories=()=>{
    //merhabalar
  const {Lanquage,GeneralDataReduces}=useSelector(state=>state)
  return(
    <View>
      <Text>2. sayfa</Text>
    </View>
  )
}
