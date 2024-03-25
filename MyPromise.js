const PENDING = 'pending';
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected';

class MyPromise{
    constructor(executor){
        this.promiseState = PENDING;
        this.promiseResult = null;
        this.onFullfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        executor(this.resolve.bind(this),this.reject.bind(this));
    }

    resolve(value){
        if(this.promiseState !== PENDING) return
        this.promiseResult = value;
        this.promiseState = FULLFILLED;
        while(this.onFullfilledCallbacks.length){
            this.onFullfilledCallbacks.shift()(this.promiseResult);
        }
        // console.log('resolve: '+this.promiseResult);
    }

    reject(value){
        if(this.promiseState !== PENDING) return
        this.promiseState = REJECTED;
        this.promiseResult = value;
        while(this.onRejectedCallbacks.length){
            this.onRejectedCallbacks.shift()(this.promiseResult);
        }
        // console.log('reject: '+this.promiseResult);
    }

    then(onFullfilled, onRejected){
        onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : (val) => val;
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason };
        
        const thenPromise = new MyPromise((resolve,reject)=>{
            const resolvePromise = (callback) =>{
                try {
                    const x = callback(this.promiseResult);
                    if(x instanceof MyPromise){
                        x.then(resolve, reject);
                    }else{
                        resolve(x)
                    }
                }catch(error){
                    reject(error)
                    throw new Error(error);
                }
            }
            if(this.promiseState === FULLFILLED){
                resolvePromise(onFullfilled);
            }
            else if(this.promiseState === REJECTED){
                resolvePromise(onRejected);
            }
            // 如果promise里面是一个计时函数，那就把函数放到回调数组里
            else if(this.promiseState === PENDING){
                this.onFullfilledCallbacks.push(resolvePromise.bind(this,onFullfilled));
                this.onRejectedCallbacks.push(resolvePromise.bind(this,onRejected));
            }
        })

        
        return thenPromise
        
    }
}



const p3 = new MyPromise((resolve, reject) => {
    resolve(1000)
  })
    .then(
      (res) => 2 * res,
      (err) => console.log(err)
    )
    .then(
      (res) => console.log(res),
      (err) => console.log(err)
    )