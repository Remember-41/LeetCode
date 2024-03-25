Function.prototype.myBind = function(ctx, ...args){
    const fn = this;
    return function(...subArgs){
        const allArgs = [...args,...subArgs];
        if(new.target){
            return new fn(...allArgs);
        }
        else{
            return fn.apply(ctx,allArgs);
        }
    }
}

function fn(...args){
    console.log(this.myname,args);
}
let obj = {
    myname:"张三"
}

// const bindFn = fn.myBind(obj); // this 也会变成传入的obj ，bind不是立即执行需要执行一次
// bindFn(1,2) // this指向obj

let nums = [1,2,3,4,5,[1,2,[1,2,3]]]


function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(this.name)
}


// const obj1 = {foo:foo}
// console.log(obj.foo)

const p = new Promise((resolve,reject)=>{
    console.log(1);
    return 123;
}).then((resolve,reject)=>{
    console.log(resolve)
})