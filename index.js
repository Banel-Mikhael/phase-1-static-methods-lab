class Formatter {
  //add static methods here
  static capitalize(arr) {
    return `${arr[0].toUpperCase()}${arr.slice(1)}`
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  static titleize(string) {
    const splitString = string.split(' ')
    let newArray = []
    const excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (const word of splitString) {
      newArray.push(excludeWords.includes(word) ? word :cap(word))
    }
    
    return cap(newArray.join(" "))
  }
}

function cap (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}