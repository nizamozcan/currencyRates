import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "../style/Colors";
import { CustomTextComponent } from "../text/CustomTextComponent";


export const Header=({title,onPress}:{title:string,onPress?:()=>void})=>{
  return(
    <View style={styles.container}>
        <CustomTextComponent text={title} style={styles.titlestyle}/>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{height:50,width:'100%',backgroundColor:Colors.ligthGreen,justifyContent:'center',flexDirection:'row'},
  titlestyle:{fontSize:20,textAlign:'center',color:'white',marginTop:10}
})
