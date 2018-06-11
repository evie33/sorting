function bubbleSort(arr){
  let result = [];
  let swap = true;
  let first, second, temp;

  if (swap===false){
    return result;
  }

  for (let i = 0; i< arr.length; i++){
    first = arr[i];
    second = arr[i+1];

    if (first>second){
      temp =  first;
      first = second;
      second = temp;
    }
    result.push(first)
  }
  //if arr[0]<arr[1] no swap;
  // move on to arr[1] compare arr[1] , arr[2];
  //if arr[i] >arr[i+1] swap;


  return result;
}
