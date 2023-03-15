// reduce()是一个高阶函数，它的第一个入参是回调函数，第二个入参是初始值
// reduce()的回调函数有四个参数，分别是：previousValue、currentValue、currentIndex、array
// reduce()的回调函数的返回值会作为下一次回调函数的previousValue
// reduce()的回调函数的第一次执行，previousValue的值是初始值，currentValue的值是数组的第一个元素

const arr = [1, 2, 3]

// 0 + 1 + 2 + 3 
const initialValue = 0
const add = (previousValue, currentValue) => previousValue + currentValue
const sumArr = arr.reduce(
  add,
  initialValue
)

console.log(sumArr) // 6

// 使用reduce()实现map()
// const map = (arr, fn) => arr.reduce((acc, val) => [...acc, fn(val)], [])


function map(arr, fn) {
  return arr.reduce((acc, val) => [...acc, fn(val)], [])
}
