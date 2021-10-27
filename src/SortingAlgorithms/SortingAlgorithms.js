function mergeSortAlgo(arr){

  const animationArray=[]

  if(arr.length<2){
    return animationArray
  }
  // const animationArray=[]
  const auxilary=arr.slice()
  mergeSort(arr,0,arr.length-1,auxilary,animationArray)
  return animationArray
}

function mergeSort(auxilary,startIndex,endIndex,arr,animationArray){
  if(startIndex===endIndex){
    return
  }
  const middle=Math.floor((startIndex+endIndex)/2)
  mergeSort(arr,startIndex,middle,auxilary,animationArray)
  mergeSort(arr,middle+1,endIndex,auxilary,animationArray)
  merge(arr,startIndex,middle,endIndex,auxilary,animationArray)
}
function merge(arr,startIndex,middle,endIndex,auxilary,animationArray){
  let i=startIndex,j=middle+1,k=startIndex
  while(i<=middle && j<=endIndex){
    animationArray.push([i,j])
    animationArray.push([i,j])
    if(auxilary[i]<=auxilary[j]){
      animationArray.push([k,auxilary[i]])
      arr[k++]=auxilary[i++]
    }else{
      animationArray.push([k,auxilary[j]])
      arr[k++]=auxilary[j++]
    }
  }
  while(i<=middle){
    animationArray.push([i,i])
    animationArray.push([i,i])
    animationArray.push([k,auxilary[i]])
    arr[k++]=auxilary[i++]
  }

  while(j<=endIndex){
    animationArray.push([j,j])
    animationArray.push([j,j])
    animationArray.push([k,auxilary[j]])
    arr[k++]=auxilary[j++]
  }

}
export default mergeSortAlgo;

