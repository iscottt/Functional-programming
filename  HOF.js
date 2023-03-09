//  HOF高阶函数
//  高阶函数，指的就是接收函数作为入参，或者将函数作为出参返回的函数。

/**
 * 举例，实现三个函数，分别是add, sub, mul
 * 三个函数的功能分别是，实现加减乘法运算
 */

/**
 * 数组每一项都加一，返回一个新的数组
 * @param {*} arr 
 * @returns 
 */
function add(arr) {
  const newArr = []
  arr.map((item) => {
    newArr.push(item + 1)
  })
  return newArr
}

/**
 * 数组的每一项都乘以3，并且返回新的数组
 * @param {*} arr 
 * @returns 
 */
function mul(arr) {
  const newArr = []
  arr.map(item => {
    newArr.push(item * 3)
  })
  return newArr
}

/**
 * 数组的每一项都处以2，并且返回一个新的数组
 * @param {*} arr 
 * @returns 
 */
function divide(arr) {
  const newArr = []
  arr.map(item => {
    newArr.push(item / 2)
  })
  return newArr;
}


/**
 * 以上的代码你说它有毛病吗？并没有，它完美的实现了我们的需求。
 * 但是它违背了DRY原则，什么是DRY原则？
 * DRY原则就是 Don't Repeat Youself.的缩写。
 * 意思就是不要让自己去重复的做同样的事情
 */

// DRY 原则的 JS 实践：HOF(高阶函数）
// 按照上面的代码，我们可以把重复的代码抽离出来，然后封装成一个函数，这个函数就是高阶函数

function handleAdd(data) { return data + 1 }
function handleMul(data) { return data * 3 }
function handleDivide(data) { return data / 2 }

function handleComputed(arr, handler) {
  const newArr = [];
  arr.map(item => {
    newArr.push(handler(item))
  })
  return newArr
}
