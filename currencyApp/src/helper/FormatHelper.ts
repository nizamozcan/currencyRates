export function getValueDataFormat(value:object) {
  var array=[]
  let say=0
  Object.entries( value ).forEach(([key,value])=>{
    say+=1
    if(key!="Update_Date"){
      let keyUpper=key.toUpperCase()
      let formatKey=keyUpper.replace("-"," ")
      let object1={key:formatKey,value}
      array.push(object1)
    }
  })
  return array
}
