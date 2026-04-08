// 2461. Maximum Sum of Distinct Subarrays With Length K


function maximumSubarraySum(nums: number[], k: number): number {
    let l = 0;
    let maxSum = 0;
    let windowSum = 0;
    let freqMap = new Map<number,number>();

    for(let i = 0; i < nums.length; i++){
        windowSum += nums[i];
        freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);

        if(i-l + 1 > k){
            windowSum -= nums[l];
            freqMap.set(nums[l], (freqMap.get(nums[l]) || 0) - 1);
            if(freqMap.get(nums[l]) == 0){
                freqMap.delete(nums[l])
            }
            l++;
        }

        if(i-l+1 === k && freqMap.size === k){
            maxSum = Math.max(windowSum,maxSum);
        }

    }

    return maxSum
};

console.log(maximumSubarraySum([1,5,4,2,9,9,9], 3))

