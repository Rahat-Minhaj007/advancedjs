  
const number=[3,4,5,6,8,9];
// const output=[];

// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result=element*element;
//     output.push(result);

// }
// function square(element){
//     return element*element;
// }

// const square =element=> element*element;
// const square=x=>x*x;
// (element,index,array) i can take 3 types of pera meter using map

// const result=number.map(function(element,index,array){
//     console.log(element,index,array);
   

// })


// const result=number.map(function(element){
//     return element*element;
// })

// // const result=number.map(x=>x*x);
// console.log(result);

const bigger=number.filter(x => x > 5);
const bigger2=number.find(x => x > 5);
console.log(bigger2);
