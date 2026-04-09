function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let left = 0;
    let count = 0;
    let prod = 1;
    for(let r = 0; r< nums.length; r++){
        prod *= nums[r];
        if(prod >= k){
            while( prod >= k){
                prod /= nums[left];
                left++
            }
        }
        count += (r-left+1)
    }
    return count;
};

console.log(numSubarrayProductLessThanK([10,5,2,6], 100))