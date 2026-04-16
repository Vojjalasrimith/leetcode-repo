function minSubArrayLen(target: number, nums: number[]): number {
    let l = 0;
    let minimum = Infinity;
    let sum = 0;

    for(let r=0; r<nums.length; r++){
        sum = sum + nums[r];
        if(sum >= target){
            if(minimum > (r-l+1)){
                minimum = Math.min(minimum, r-l+1);
            }
            sum = sum - nums[l]
            l++;
        }
    }
    return minimum == Infinity ? 0 : minimum;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))