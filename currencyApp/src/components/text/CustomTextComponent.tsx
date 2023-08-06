import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

export const CustomTextComponent=({text,style}:{text:string,style?:TextStyle})=>{
  return(
    <Text style={{...styles.txtStyle,...style}}>{text}</Text>
  )
}
const styles=StyleSheet.create({
  txtStyle:{
    fontWeight:'700'
  }
})

