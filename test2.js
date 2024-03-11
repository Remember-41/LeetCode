// 给定多个 Promise，实现一个 promiseConcurrency 函数，支持控制 Promise 的并发数量，
// 例如 concurrency 传入 4，则表示同一时间内只能有 4 个 task 在运行，不够 4 个 task 时，剩下的 task 会补上，
// 等待全部 Promise 执行完后，返回所有结果
// 传入 promiseConcurrency 里的 task 函数

const task = (time) => () => new Promise(resolve => {
    setTimeout(() => {
      console.log(time);
      resolve(time);
    }, time);
  });
  
  // tasks 为上文的 task 函数数组，返回一个 promise
  // concurrency 为并发次数，指定同一时间可以运行的 promise 数量
  // 实现 promiseConcurrency 函数
  function promiseConcurrency(tasks, concurrency) {
    // 你的代码
    if(tasks.length === 0) return new Promise.resolve();
    return new Promise((resolve)=>{
        let index = 0;
        let res = [];
        let count = 0;
        async function _exec(){
            let cur = index;
            let task = tasks[cur];
            index ++;
            try{
                res[cur] = await task();
            }catch(err){
                res[cur] = err
            }finally{
                count++;
                if(index<tasks.length){
                    _exec();
                }
                if(count === tasks.length){
                    resolve(res);
                }
            }
        }
        for(let i=0;i<Math.min(tasks.length,concurrency);i++){
            _exec
        }
    })

  }
  
  // 输出结果
  // 2000 // 第一次输出
  // 3000 3000 3000 1000 // 第二次输出
  // 2000 // 第三次输出
  // [ 3000, 3000, 3000, 2000, 1000, 2000 ] // 最后输出
  promiseConcurrency([
    task(3000),
    task(3000),
    task(3000),
    task(2000),
    task(1000),
    task(2000),
  ], 4).then((res) => {
    console.log('all result: ', res);
  });

 