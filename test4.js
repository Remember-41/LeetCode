const hasSum = function(root, sum){
    if(root === null) return false;
    if(root.left === null && root.right === null){
        if(root.val === sum){
            return true
        }
        else {
            return false;
        }
    }
    return hasSum(root.left, sum-root.val) || hasSum(root.right, sum-root.val);
}

function debounce(fn , delay = 100){
    let timer = null;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },delay);
    }
}

const scrollHandler = debounce(()=>{
    console.log('scroll');
}, 100);

window.addEventListener('scroll', scrollHandler);