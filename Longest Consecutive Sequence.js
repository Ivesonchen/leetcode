    /**
     * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

     For example,
     Given [100, 4, 200, 1, 3, 2],
     The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

     Your algorithm should run in O(n) complexity.

     time : O(n)
     space : O(n)

     * @param nums
     * @return
     */

    //把值放入set中  然后对nums每个值循环   检测两个值 up 为+1 和 down 为-1  然后不停的+1 和 -1记录最大长度   向两边伸展到最大长度

    var longestConsecutive = function(nums) {
        if(nums === null || nums.length===0) return 0;
        var res = 0;
        var set = new Set();
        for(let i in nums){
            set.add(nums[i]);
        }
            
        for(let i in nums){
            console.log(nums[i]);
            var up = nums[i]+1;
            var down = nums[i]-1;
            while(set.has(up)){
                set.delete(up);
                up++;
            }
            while(set.has(down)){
                set.delete(down);
                down--;
            }
            res = Math.max(res,up-down-1);
        }
        return res;
    };