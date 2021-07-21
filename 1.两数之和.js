/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
   const hashMap  = new Map()

   for(var i  = 0;i < nums.length;i++){
       if(hashMap.has(target - nums[i])){
           return [hashMap.get(target-nums[i]),i]
       }else {
           hashMap.set(nums[i],i)
       }
   }

};
// @lc code=end

