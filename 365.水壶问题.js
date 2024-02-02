/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function(jug1Capacity, jug2Capacity, targetCapacity) {
    let stack = [];
    stack.push([0,0]);
    let set = new Set();
    while(stack.length!==0){
    // while(i>0){
        if(set.has(hash(stack[stack.length - 1]))){
            stack.pop();
            continue;
        }
        set.add(hash(stack[stack.length - 1]));
        let x = stack[stack.length - 1][0];
        let y = stack[stack.length - 1][1];
        stack.pop();
        if(x + y === targetCapacity || x === targetCapacity || y=== targetCapacity){
            return true;
        }

        // x壶灌满
        stack.push([jug1Capacity,y]);
        // y壶灌满
        stack.push([x, jug2Capacity]);
        // x壶清空
        stack.push([0,y]);
        // y壶清空
        stack.push([x,0]);
        // x壶倒到y壶
        stack.push(jug2Capacity-y >= x ? [0, x+y] : [x+y-jug2Capacity,jug2Capacity]);
        // y壶倒到x壶
        stack.push(jug1Capacity-x >= y ? [x+y, 0] : [jug1Capacity,x+y-jug1Capacity]);
    }
    return false;
};

var hash = function(nums){
    return nums[0]*1000001 + nums[1];
}

console.log(canMeasureWater(1,2,3));
// @lc code=end

