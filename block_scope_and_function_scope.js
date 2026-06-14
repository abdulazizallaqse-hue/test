/* Function scope means that variables defined inside a function are not accessible outside of that function. 
Block scope means that variables defined inside a block (like an if statement or a for loop) are not accessible outside of that block. */ 

function myPram(){
   if(true){
    let ex = 7;
   const ex2 = 8;
   var ex3 = 9;
   }

console.log(ex3);

// console.log(pram1-pram2);

}
myPram();

