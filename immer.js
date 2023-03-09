// Immer.js 不可变性数据的解决方案
// 他的原理是利用了Proxy对象，来拦截对象的读写操作，从而实现数据的不可变性

// 快速了解一下Proxy对象
// Proxy对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。

// 举例
const baseData = {
  age: 10,
  name: 'Jack'
}

const proxyHandle = {
  get: (target, key) => {
    if (key === 'age') {
      return 20
    }
    return target[key]
  }
}

const proxyData = new Proxy(baseData, proxyHandle)

console.log(proxyData.age) // 20


// immerJs中produce的简单实现
function produce(base, recipe) {
  let copy
  const baseHandler = {
    set: (target, key, value) => {
      if (!copy) {
        copy = { ...base }
      }
      copy[key] = value
      return true
    }
  }

  // 被 proxy 包装后的 base 记为 draft
  const draft = new Proxy(base, baseHandler)
  // 将 draft 作为入参传入 recipe
  recipe(draft)
  // 返回一个被“冻结”的 copy，如果 copy 不存在，表示没有执行写操作，返回 base 即可
  // “冻结”是为了避免意外的修改发生，进一步保证数据的纯度
  return Object.freeze(copy || base)
}

// 这是我的源对象
const baseObj = {
  a: 1,
  b: {
    name: "修言"
  }
}

// 这是一个执行写操作的 recipe
const changeA = (draft) => {
  draft.a = 2
}


// 这是一个不执行写操作、只执行读操作的 recipe
const doNothing = (draft) => {
  console.log("doNothing function is called, and draft is", draft)
}

// 借助 produce，对源对象应用写操作，修改源对象里的 a 属性
const changedObjA = produce(baseObj, changeA)

// 借助 produce，对源对象应用读操作
const doNothingObj = produce(baseObj, doNothing)

// 顺序输出3个对象，确认写操作确实生效了
console.log(baseObj)
console.log(changedObjA)
console.log(doNothingObj)

// 【源对象】 和 【借助 produce 对源对象执行过读操作后的对象】 还是同一个对象吗？
// 答案为 true
console.log(baseObj === doNothingObj)
// 【源对象】 和 【借助 produce 对源对象执行过写操作后的对象】 还是同一个对象吗？
// 答案为 false
console.log(baseObj === changedObjA)
// 源对象里没有被执行写操作的 b 属性，在 produce 执行前后是否会发生变化？
// 输出为 true，说明不会发生变化
console.log(baseObj.b === changedObjA.b)
