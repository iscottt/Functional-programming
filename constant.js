// const只能保证值类型数据的不可变，却不能保证引用类型数据的不可变

const price = 10
price = 20 // TypeError: Assignment to constant variable.

const user = {
  name: 'Jack',
  age: 26,
  appearance: 'handsome'
}

user.age = 27 // 可以修改对象的属性值


// 如何解决？
const JOB_INFO_001 = { level: 7, workTime: 2, type: 'engineer', city: 'New York' }

/**
 * 确认公司高管数量是否达到阈值
 * 如果达到了，那就就只增加基础只为的招聘，
 * 如果没有达到，那就增加高级别的招聘
 */

// 假设公司高管数量没有达到阈值
function isHighPosition() {
  return true
}

// 发送招聘需求
function dynamicCreateJob(baseJob) {
  const newJob = baseJob
  if (isHighPosition()) {
    // 未达到阈值，创建一个高级别的招聘需求
    newJob.level = 10;
  }
  return baseJob
}

/**
 * 你会发现，无论公司高管数量是否达到阈值，都会创建一个高级别的招聘需求
 * 这是因为dynamicCreateJob函数中的赋值操作，仅仅是把引用赋值过去了
 * 要解决这个问题其实很简单，我们需要用拷贝的方式来创建一个新的对象，而不是直接赋值
 */
function dynamicCreateJob(baseJob) {
  const newJob = { ...baseJob }
  if (isHighPosition()) {
    // 未达到阈值，创建一个高级别的招聘需求
    newJob.level = 10;
  }
  return baseJob
}
