function findMaxConsecutiveOnes(nums: number[]): number {
    let temp = 0;
    let max =0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            temp += 1
        }else {
            max = Math.max(temp, max);
            temp =0;
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))