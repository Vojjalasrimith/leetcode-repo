function longestOnes(nums: number[], k: number): number {
  let l = 0;
  let max = 0;
  let zCount = 0;
  for(let r = 0; r < nums.length; r++ ){
    if(nums[r] == 0) zCount++;
    if(zCount > k){
        while(zCount >= k){
            if(nums[l] == 0) zCount--;
            l++;
        }
    }
    max = Math.max(max, r-l+1);
  }
  return max
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))