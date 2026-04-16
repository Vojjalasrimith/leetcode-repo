function totalFruit(fruits: number[]): number {
    let l = 0;
    let map = new Map();
    let max = -1;
    for(let r=0; r < fruits.length; r++){
        map.set(fruits[l], (map.get(fruits[l]) || 0) + 1 )
        if(map.size > 2){
            while(map.size > 2){
                map.set(fruits[l], (map.get(fruits[l]) || 0) - 1 );

                if(map.get(fruits[l]) == 0) map.delete(fruits[l])
                l++;
            }
        }

        max = Math.max(max, r-l+1);
    }
    return max
};


console.log(totalFruit([0,1,2,2]))