function largest(nums){
    let max = nums[0];
        if (nums.length == 0)
        {
            return null;
        }
    for(let i =0; i < nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
         }
    }
            return max;
}
console.log(largest([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(largest([-1, -5, -2]));
console.log(largest([7]));
console.log(largest([]));
console.log(largest([2,2,2]));