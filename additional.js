const mixedArray = [3,13,74,14,66,15,22,4,2];
const isEven = num => {
  if (num % 2 == 0) {
    return true;
  }
};

function filterArray(arr , func) {

  const evenNumArray = [];

  for (let i=0 ; i < arr.length ; i++) {
    
    if (isEven(arr[i]) == true ) {
      evenNumArray.push(arr[i])
    }
  }

  return evenNumArray;
}


console.log(filterArray(mixedArray, isEven));