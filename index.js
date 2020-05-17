const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = array.find(keys => keys.result === "W")
  return result ? result.year : undefined
}