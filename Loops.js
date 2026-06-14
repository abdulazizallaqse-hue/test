// const myArray = [];
/////////////while loop
// let i = 20;
// while(i > 10){
//     myArray.push(i);
//     console.log(i);
//     i--;
// }
/////////////for loop samiller example
// for (let i = 20; i >10; i--){
//     myArray.push(i);
//     console.log(i);
// }
// 
//////////اعاداد زوجية
// for (let i = 0; i <= 10; i+=2){
//     myArray.push(i);
//     console.log(i);
// }


//////power to 2
// for (let i = 2; i < 1000; i *=2){
//     myArray.push(i);
//     console.log(i);
// }


//sum of array
// const newArray = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i <newArray.length; i++){
//     sum += newArray[i];
// }
// console.log(sum);


///////////////do and while
// const thirdArray = [];
// let i = 0;
// do {
//     thirdArray.push(i);
//     i++;
// }
// while (i < 5);
//  console.log(thirdArray ,i);

// //////////////////////????????
// //////////////Recursion function
function multuply(arr,n){
    console.log("n = " , n);
    if (n <= 0){
        return 1;
    } 
    else {
        return multuply(arr, n-1) * arr[n-1];
    }
}
    console.log(multuply([10,5] ,2));


// function sum(arr,n){
//     if (n <= 0){
//         return 0;
//     }
//     else{
//         return sum(arr, n-1) + arr[n-1];
//     }
// }
// console.log(sum([1,2,3,4,5], 2));






//////////////////////loop to find iteem
// const items = [
//     {
//         name: "pizza",
//         price: 25
//     },
//     {
//         name: "burger",
//         price: 18
//     },
//     {
//         name: "cola",
//         price: 5
//     }
// ];

// function findItem(name){
//     for(let i = 0; i <items.length; i++){
//         if(items[i].name === name){
//             return items[i].price;
//         }
//         else{ return "not found"
//         }
// }
// }
// console.log(findItem("pizza"));