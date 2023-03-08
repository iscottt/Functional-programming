// 一等公民函数

/**
 * 如果一门编程语言将函数当做一等公民对待，那么这门语言被称作“拥有头等函数
 * 
 * 什么是一等公民函数？
 * 1. 函数可以作为参数传递给另一个函数
 * 2. 函数可以作为另一个函数的返回值
 * 3. 函数可以作为变量的值
 * 
 * 简单来说，就是函数可以像变量一样被传递和使用
 */


// JS举例


// 1. 函数可以作为参数传递给另一个函数

// 将一个匿名函数赋值给变量 callMe
let callMe = () => {
  console.log('Hello World！')
}

// 输出 callMe 的内容
console.log(callMe)
// 调用 callMe
callMe()

// 将一个新的匿名函数赋值给变量 callMe
callMe = () => {
 console.log('Hello 修言~')
}

// 输出 callMe 的内容
console.log(callMe)
// 调用 callMe
callMe()

