function bruteForceTwoSum(arr, sum) {
  var sums = []
  arr.forEach(( num, index ) => {
    arr.forEach( innerNum => {
      if (sum === num + innerNum) {
        sums.push(arr.splice(index, 1).concat(innerNum))
      }
    })
  })
  return sums
}

function binarySearchTwoSum(arr, sum){
  let sortedArray = arr.sort()
  let sums = []
  arr.forEach( (num, index) => {
    if (binaryMatch(arr, sum - num)) {
      sums.push(arr.splice(index, 1).concat(sum - num))
    }
  })
  return sums
}

function binaryMatch(arr, missingNo){
  const midpoint = arr.length/2
  const first = arr.slice(0, midpoint)
  const last = arr.slice(midpoint, arr.length)
  if (last[0] === missingNo || first[0] === missingNo) {
    return true
  } else if (last[0] > missingNo) {
    return binaryMatch(first, missingNo)
  } else if (last[0] < missingNo) {
    return binaryMatch(last, missingNo)
  }
  return false
}

function hashTwoSum(arr, sum){
  let hash = {}
  let results = []
  arr.forEach( num => {
    if (hash[num]) {
      results.push( [hash[num], num] )
    } else {
      hash[sum - num] = num
    }
  })
  return results
}
