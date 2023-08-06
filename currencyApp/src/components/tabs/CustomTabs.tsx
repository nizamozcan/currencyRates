import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomTextComponent } from "../text/CustomTextComponent";
import { Colors } from "../style/Colors";

export const CustomTabs=({text,visible,onPress}:{text:string,visible:boolean,onPress?: () => void})=>{
  return(
    <TouchableOpacity onPress={onPress} style={{flex:2,backgroundColor:visible==true?Colors.ligthGreen:'white',borderRadius:10}}
    disabled={visible==true?true:false}>
      <CustomTextComponent text={text} style={visible==false?styles.txtCategory:{fontSize:18,alignSelf:'center',color:'white'}}/>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
  txtCategory:{fontSize:18,alignSelf:'center'}
})
