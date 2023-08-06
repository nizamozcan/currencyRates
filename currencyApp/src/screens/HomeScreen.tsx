import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Switch,
  TextInput,
  View
} from "react-native";
import { HomeScreenCard }  from "../components/cards/HomeScreenCard"
import { useDispatch, useSelector } from "react-redux";
import { getDataAction, SetCurrency, setLanquage } from "../actions/action";
import { Header } from "../components/cards/Header";
import { Separator } from "../components/other/Separator";
import { CustomTabs } from "../components/tabs/CustomTabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../components/style/Colors";




const HomeScreen=()=>{
  const [dataState,setState]=useState(null)
  const [filterData,setFilterData]=useState("")
  const [currencyEnable,setCurrencyEnable]=useState(true)
  const [goldEnable,setGoldEnable]=useState(false)
  const [filterInput,setFilterInput]=useState("")
  let counter=0
//900000
  //setInterval(()=> {
   // getData()  }, 2000);

  const dispatch=useDispatch()
  const {Lanquage,GeneralDataReduces}=useSelector(state=>state)

  useEffect(()=>{
    getData()
    getLanquage().then((x)=>dispatch(setLanquage(x)))
  },[])
  const getData=async ()=>{
    await getDataAction('https://finans.truncgil.com/today.json').then((data)=>{
       dispatch(SetCurrency(data))
      setState(data)
    })

  }
  const getLanquage=async()=>{
    let lanquage=await AsyncStorage.getItem('lanquage')
    return lanquage==null?'tr':lanquage
  }
  const renderItem=({item})=>{
      return(
        <View>
          <HomeScreenCard
              currencytitle={item.key} buying={item?.value?.Alış}
                          sale={item.value?.Satış} change={item.value?.Değişim}
                          type={item.value?.Tür} visible={currencyEnable==true?'Döviz':'Altın'}
          />
        </View>
      )
  }
  const filteredDatas=(text:string)=>{
    counter+=1
   let filterData=dataState.filter(
     function(item){
       if(item.key==text){
         counter=3
         let array=[item]
         setFilterData(array)
       }
     }
   )

    counter<3?setFilterData(""):null
  }
  return(
    <SafeAreaView >
      <Header title={Lanquage.currency_rates} />
      <View style={{flexDirection:'row',height:30,marginTop:5,margin:10}}>
         <CustomTabs text={Lanquage.currency} visible={currencyEnable} onPress={()=> {
         setGoldEnable((x) => !x);
         setCurrencyEnable((x)=>!x)
       }}/>
         <CustomTabs text={Lanquage.gold} visible={goldEnable} onPress={()=> {
          setGoldEnable((x) => !x);
          setCurrencyEnable((x)=>!x)
        }}/>
      </View>
      <Separator  ViewStil={{marginBottom:20}}/>
      <View>
        <TextInput style={{height:40,width:350,borderRadius:10,borderWidth:0.5,alignSelf:'center'}}
        placeholder={'Ara...'} textAlign={'center'} onChangeText={(text)=>filteredDatas(text.toUpperCase())}/>
      </View>
      {dataState==null?<ActivityIndicator style={{height:50,marginTop:20}}  size="large" />:null}
      <FlatList data={filterData==""?dataState:filterData} renderItem={renderItem}/>
      <View>
      </View>
      </SafeAreaView>
  )
}
export default HomeScreen
const styles=StyleSheet.create({
txtStil:{fontSize:16},
  txtCategory:{fontSize:18,alignSelf:'center'}
})
