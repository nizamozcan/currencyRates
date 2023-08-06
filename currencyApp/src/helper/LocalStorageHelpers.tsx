import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorageHelpers=async(value:string,isVisible:boolean)=>{
  let returnData;
  let data=await AsyncStorage.getItem('favories')
  let formatData=data==null?[]:JSON.parse(data)
  try {

    if(isVisible==true){
      formatData.push(value)
      await AsyncStorage.setItem('favories',JSON.stringify(formatData))
      let dataFavories=await AsyncStorage.getItem('favories')
      returnData=JSON.parse(dataFavories)
    }

  }
  catch (error){
    console.log("bu bir hata "+error)
  }
  return array
}
