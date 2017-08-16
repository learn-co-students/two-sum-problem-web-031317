let bruteForceTwoSum = (array, sum) => {
  let results = []
  array.forEach( (num, index) => {
    array.forEach( inner => {
      if (inner + num === sum){
        results.push(array.splice(index, 1).concat(inner))
      }
    })
  })
  return results
}

let binarySearchTwoSum = (array, sum) => {
  let sorted = array.sort()
  let results = []
  array.forEach( (num, index) => {
    if (binaryMatch(sorted, sum - num)) {
      results.push(array.splice(index, 1).concat(sum - num))
    }
  })
  return results
}

let binaryMatch = (sortedArray, missingNum) => {
  let mid = sortedArray.length / 2
  let first = sortedArray.slice(0, mid)
  let last = sortedArray.slice(mid, sortedArray.length)
  if (first[0] === missingNum || last[0] === missingNum){
    return true
  } else if (last[0] < missingNum) {
    return binaryMatch(last, missingNum)
  } else if (last[0] > missingNum) {
    return binaryMatch(first, missingNum)
  } else {
    return false
  }
}

let hashTwoSum = (array, sum) => {
  let hash = {}
  let results = []
  array.forEach( num => {
    if (hash[num]){
      results.push( [hash[num], num] )
    } else {
      hash[sum - num] = num
    }
  })
  return results
}
