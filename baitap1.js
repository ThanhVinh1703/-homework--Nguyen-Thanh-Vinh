// BAITAP !

// let array = ["Vinh", 1 , "hello", 2.5 ,"world", 3,"hi", 4 ];
// let integer = [];
// for (let i = 0; i <= array.length - 1; i++){
//     if (Number.isInteger(array[i])){
//         integer.push(array[i]);
//     }
//     }
// if (integer.length > 0){
//     console.log("Số nguyên là:", integer);
// }else{
//     console.log("trong mảng ko tồn tại số nguyên");        
// }


// BAITAP 2
// let array = [10, 20, 30, 40, 50, 60, 70 , 80, 90];
// let input = prompt("please enter the value you want:");

// let found = -1
// for (let i = 0; i <= array.length; i++){
//     if(array[i] == input){
//         found = i;
//         break;
//     }
// }
// if(found !== -1 ){
//     console.log("The value " + input + " is found", "at the location:"+ found);   
// }else{
//     console.log("The value is not exit");  
// }


// BAI TAP 3

// let array = [10, 20, 30, 40, 10, 60, 70 , 80, 90];
// let input = prompt("Enter the value you want to count in the array:")
// let count = 0;
// for( let i = 0; i <= array.length; i++){
//     if (array[i] == input){
//         count++;
//     }
// }
// console.log("the value: "+ input, " is appear "+ count +" time");

// BAI TAP 4

// let a = +prompt("Enter a positive integer a");
// let b = +prompt("Enter a positive integer b");
// let arrayList = [];
// if(Number.isInteger(a) && a > 0 && Number.isInteger(b) && b > 0){
//     for ( let i = 1; i <= a; i++){
//         if(i % b === 0){
//             arrayList.push(i);
//         }
//     }
//     for ( let j = 1; j <= b; j++){
//         if(j % a === 0){
//             arrayList.push(j);
//         }
//     }
//     console.log("The array containing the divisible numbers is:", arrayList)
// }else{
//     console.log("Please enter two positive integers")
// }

// BAI TAP 5

// let array = [1 , 2 , 3 , 4 , 5];
// let result = array.reverse();

// console.log("mảng sau khi đảo ngược:",result);

// BAI TAP 6

// let array = [1, 2 , 3 , -3 , -5 , -9 ];
// let negativeNumbers = [];
// let positiveNumbers = [];

// for(let i = 0; i <= array.length; i++){
//     if(array[i] < 0){
//         negativeNumbers.push(array[i]);
//     }else{
//         positiveNumbers.push(array[i]);
//     }
// }
// let resultArray = negativeNumbers.concat(positiveNumbers);
// console.log("mảng sau khi sắp xếp:",resultArray);
















