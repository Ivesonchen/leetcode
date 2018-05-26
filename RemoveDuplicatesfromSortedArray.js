    /**
     * 26. Remove Duplicates from Sorted Array
     * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

     Do not allocate extra space for another array, you must do this in place with constant memory.

     For example,
     Given input array nums = [1,1,2],

     Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

     case : [1,1,2,2,3,4,5,6]
             1,2,3,4,5,6
                 c
                     i
     result : [1,2,3,4,5,6]

     time : O(n);
     space : O(1);
     */
     /**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums == null || nums.length ==0) return 0;
    var count = 1;
    for(var i =1;i<nums.length;i++){
        if(nums[i] != nums[count-1]){
            nums[count++] = nums[i];
        }
    }
    return count;
};

//设置一个count指针  从前往后刷新值
//用 i 来比较 count-1 比较重复值                如果不重复 用count指向 来刷新
//                  来设置最多能有几个重复的