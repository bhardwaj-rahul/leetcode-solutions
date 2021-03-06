/** Problem url
* https://leetcode.com/problems/4sum/ 
**/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const res = [];
    nums.sort((a,b) => a-b);
    for (let i =0;i<nums.length-3;i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
       for (let j=i+1;j<nums.length-2;j++) {
           if (j > i +1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let left = j+1;
            let right = nums.length -1;
            let reqSum = target - nums[i] - nums[j];
            while(left < right) {
                let lrSum = nums[left] + nums[right];
                if (reqSum === lrSum) {
                    res.push([nums[i],nums[j],nums[left],nums[right]]);
                   
                    while(left < right && nums[left]=== nums[left +1]) {
                        left++;
                    }
                    while(left < right && nums[right]=== nums[right-1]) {
                        right--;
                    }
                    left++;
                    right--;
                } else if (lrSum > reqSum) {
                    right--;
                } else {
                    left++;
                }
            }
           // while(j+1 < nums.length && nums[j+1]=== nums[j]) {
           //     j++;
           // }
       }
        // while(i+1 < nums.length && nums[i+1]=== nums[i]) {
        //        i++;
        //    }
    }
    return res;
};
