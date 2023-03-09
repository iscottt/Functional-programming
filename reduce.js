// reduce()是一个高阶函数，它的第一个入参是回调函数，第二个入参是初始值。

const arr = [1, 2, 3]

// 0 + 1 + 2 + 3 
const initialValue = 0  
const add = (previousValue, currentValue) => previousValue + currentValue
const sumArr = arr.reduce(
  add,
  initialValue
)

console.log(sumArr) // 6

