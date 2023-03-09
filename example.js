// 这里我mock了一组员工信息作为原始数据，实际处理的数据信息量应该比这个大很多
const peopleList = [
  {
    name: 'John Lee',
    age: 24,
    career: 'engineer'
  },
  {
    name: 'Bob Chen',
    age: 22,
    career: 'engineer'
  },
  {
    name: 'Lucy Liu',
    age: 28,
    career: 'PM'
  },
  {
    name: 'Jack Zhang',
    age: 26,
    career: 'PM'
  },
  {
    name: 'Yan Xiu',
    age: 30,
    career: 'engineer'
  }
]

const LEN = peopleList.length;

// 排序找出年龄大于24岁的员工，并且按照年龄升序排列
for (let i = 0; i < LEN; i++) {
  // console.log(peopleList[i])
  for (let j = 0; j < LEN - 1; j++) {
    const currentElement = peopleList[j];
    const prevElement = peopleList[j + 1];
    if (currentElement.age < prevElement.age) {
      [peopleList[j], peopleList[j + 1]] = [peopleList[j + 1], peopleList[j]]
    }
  }
}

let logText = ''
for (let i = 0; i < LEN; i++) {
  if (peopleList[i].age > 24) {
    logText += `${peopleList[i].name} is ${peopleList[i].age} years old, and he is a ${peopleList[i].career}.\n`
  }
}

console.log(logText)

// 函数式编程写法

function sortByAge(a, b) {
  return a.age - b.age
}

function ageBiggerThan24 (person) {
  return person.age > 24
}

function getLogText (person) {
  return `${person.name} is ${person.age} years old, and he is a ${person.career}.`
}

const logTextByFP = peopleList.sort(sortByAge).filter(ageBiggerThan24).map(getLogText).join('\n')
console.log(logTextByFP)


/**
 * 总结：
 * 
 * 两种方式对比之下，函数式编程的代码量更少，更加简洁，更加易读，更加易维护
 * 而且函数式编程的代码更加具有可复用性，更加符合函数式编程的思想
 */
