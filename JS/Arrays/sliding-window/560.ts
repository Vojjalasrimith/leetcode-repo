function subarraySum(nums: number[], k: number): number {
    let map = new Map<number,number>();
    map.set(0,1)
    let sum = 0;
    let count = 0;
    for(let i = 0; i< nums.length; i++){
        sum+= nums[i];
        if(map.has(sum - k)){
            count += (map.get(sum-k) || 0);
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count;
};

console.log(subarraySum([1,1,1], 2))