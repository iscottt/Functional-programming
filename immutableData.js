// js数据类型中，分为值类型和引用类型
// 值类型：Number、String、Boolean、Null、Undefined
// 引用类型：Object、Array、Function


/**
 * 可变数据带来的危害举例
 * 1. 传参时，如果传递的是引用类型，那么在函数内部修改参数，会影响到外部的数据
 * 2. 在函数内部修改了外部的数据，会导致程序的不可预测性
 * 3. 在多人协作开发时，如果不注意，会导致数据的混乱
 */

// 改变招聘需求的层级level
function changeJobLevel(jobInfo, level) {
  const newLevelJob = jobInfo
  newLevelJob.level = level
  return newLevelJob  
}

// 是否高等级的招聘需求
function isHighLevelJob(jobInfo) {
  return jobInfo.level >= 9
}   

// 发送招聘需求
function releaseJobs(jobList, isHighLevelJob) {
  jobList.forEach((job)=>{
    if(isHighLevelJob(job)){
      // 转发给猎头公司
    } else {
      // 转发到公司内部的池子里去
    }
  })
}

// 假设存在的一条招聘需求
const JOB_INFO_001 = {level: 7, workTime:2 , type:'engineer', city:'New York'} 
// 现在公司需要新建一条其他方面完全一致，但是这条招聘需求的level提升到9级
const JOB_INFO_002 = changeJobLevel(JOB_INFO_001, 9);

// 组装两条数据为一个发布数组
const releaseList = [JOB_INFO_001, JOB_INFO_002]

// 发布两条数据
releaseJobs(releaseList, isHighLevelJob)

console.log(JOB_INFO_001 === JOB_INFO_002) // true

/**
 * 你会发现两条招聘需求都被推送到了猎头公司，
 * 这是因为changeJobLevel函数中的赋值操作，仅仅是把引用赋值过去了
 * 导致JOB_INFO_001和JOB_INFO_002指向了同一个内存地址
 * 虽然它重新创建了一个新的对象，但是它的内部数据和JOB_INFO_001是共享的
 */ 

