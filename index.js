let bruteForceTwoSum = (array, sum) => {
  let result = [],
      sorted = array.sort( (a, b) => a - b )

  for (let i = 0; i < sorted.length; i++){
    for (let j = i + 1; j < sorted.length; j++){
      if (sorted[j] === sum - sorted[i]){
        result.push([sorted[i], sorted[j]])
      }
    }
  }
  return result
}

let binarySearchTwoSum = (array, sum) => {
  let sorted = mergeSort(array),
      results = [],
      indices = {}

  for (let i = 0; i < sorted.length; i++){
    let diff = sum - sorted[i],
        binIndex = binarySearchIndex(sorted, diff)
    if ( binIndex && !indices[i] && !indices[binIndex] ){
      results.push([sorted[i],sorted[binIndex]])
      indices[i] = true
      indices[binIndex] = true
    }
  }
  return results
}

let binaryMatch = (sortedArray, num) => {
  let start = 0,
      end = sortedArray.length - 1,
      mid

  while ( start <= end ){
    mid = Math.floor( (start + end)/2 )
    if (num === sortedArray[mid]){
      return true
    }else if ( num < sortedArray[mid]){
      end = mid - 1
    }else if ( num > sortedArray[mid]){
      start = mid + 1
    }
  }
  return false
}

let binarySearchIndex = (sortedArray, num) => {
  let start = 0,
      end = sortedArray.length - 1,
      mid

  while ( start <= end ){
    mid = Math.floor( (start + end)/2 )
    if (num === sortedArray[mid]){
      return mid
    }else if ( num < sortedArray[mid]){
      end = mid - 1
    }else if ( num > sortedArray[mid]){
      start = mid + 1
    }
  }
  return false
}

let findMinAndRemoveSorted = array => {
  return array.shift()
}

let merge = (firstSubarray, secondSubArray) => {
  let sorted = []
  while(firstSubarray.length != 0 && secondSubArray.length != 0){
    if(firstSubarray[0] < secondSubArray[0]){
      sorted.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}

let mergeSort = array =>{
  let midpoint = array.length/2,
      firstHalf = array.slice(0, midpoint),
      secondHalf = array.slice(midpoint, array.length),
      sorted

  if(array.length < 2){
    return array
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }

  return sorted
}

let hashTwoSum = (array, sum) => {
  let hashMap = {},
      results = [],
      indices = {}

  for (let i = 0; i < array.length; i++){
    if ( !hashMap[array[i]] ){
      hashMap[array[i]] = i
    }
  }

  for (let j = 0; j < array.length; j++){
    let diff = sum - array[j]
    if ( hashMap[diff] && !indices[j] && !indices[hashMap[diff]] ){
      results.push([array[j], diff])
      indices[j] = true
      indices[hashMap[diff]] = true
    }
  }
  return results
}

let hashMapTwoSum = (array, sum) => {
  let hashMap = {},
      results = []

  for ( let i = 0; i < array.length; i++){
    if (hashMap[array[i]]){
      results.push( [ hashMap[array[i]], array[i] ])
    }else{
      hashMap[sum - array[i]] = array[i]
    }
  }
  return results
}
