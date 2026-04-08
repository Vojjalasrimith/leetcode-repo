//167. Two Sum II - Input Array Is Sorted

function twoSum(numbers: number[], target: number): number[] {
    let l = 0; 
    let r =numbers.length -1;
    while(l<r){
        if(numbers[r] + numbers[l] > target) r--;
        else if(numbers[r] + numbers[l] < target) l++;
        else if(numbers[r] + numbers[l] == target) return [l+1,r+1]
    }

    return [l+1,r+1]
};