import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

export const  Separator=({style,ViewStil}:{style?:ViewStyle,ViewStil?:ViewStyle})=>{
  return(
    <View style={{...styles.container,...ViewStil }}>
      <View style={{ ...styles.borderStil, ...style }}></View>
  </View>
  )
}
const styles=StyleSheet.create({
  container:{flex:1,marginBottom:10},
  borderStil:{height:1,width:'100%',backgroundColor:'grey',marginTop:5,marginBottom:5}
})
