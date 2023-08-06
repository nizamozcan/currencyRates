import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CountryFlag from "react-native-country-flag";
import { CustomTextComponent } from "../text/CustomTextComponent";
import { Separator } from "../other/Separator";
import { SwitchComponent } from "../../swich/SwitchComponent";

export const HomeScreenCard=({currencytitle,buying,sale,change,type,visible}:{currencytitle?:string,buying?:string,sale?:string,change?:string,type?:string,visible?:string})=>{

  if(visible==type){
    return(
      <View style={{flexDirection:'row',borderWidth:1,borderColor:'white',minHeight:50,marginTop:10}}>
        <View style={{flex:2,flexDirection:'row',alignSelf:'center'}}>
          <CountryFlag isoCode={"tr"} size={30}/>
          <CustomTextComponent text={currencytitle} style={styles.txtstyle}/>
        </View>
        <View style={{flex:0.5,alignSelf:'center'}}>
          <CustomTextComponent text={"Satış"} style={styles.txtStyle2}/>
          <CustomTextComponent text={"Alış"} style={styles.txtStyle2}/>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
          <CustomTextComponent text={buying} style={styles.txtstyle}/>
          <CustomTextComponent text={sale} style={styles.txtstyle}/>
        </View>
        <SwitchComponent text={currencytitle}/>

      </View>
    )
  }else{
    return (<View></View>)
  }

}
const styles=StyleSheet.create({
  txtstyle:{flex:1,fontWeight:'600',marginLeft:5},
  txtStyle2:{flex:1,fontWeight:'200',fontSize:12}
})
