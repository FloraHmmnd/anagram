let array = ['car', 'arc', 'test', 'tsst', 'set', 'tes']

function arrayOfAnagrams (list) {
  let sortedArray = []

  for (let i = 0; i < list.length; i++) {
    let sortedString = list[i]
      .split('')
      .sort()
      .join('')

    if (undefined === sortedArray[sortedString]) {
      sortedArray[sortedString] = []
    }
    sortedArray[sortedString].push(list[i])
  }

  console.log(sortedArray)
}

arrayOfAnagrams(array)
