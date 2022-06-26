const myArray = ['tool', 'trouble', 'to', 'this', 'tomorrowss', 'thier', 'trousers'];
let length = 0;
let word;

////LONG FORM AS A CALLBACK FUNCTION:
// myArray.forEach(longest);
// function longest(val){
//   if(val.length > length){
//     length = val.length;
//     return word = val;
//   }
// }

//SAME AS AN ARROW FUNCTION:
myArray.forEach(val => {
    if(val.length > length){
    length = val.length;
    return word = val;
  }
})

////USING REDUCE FUNCTION WITH ARROW FUNCTION CALLBACK:
// word = myArray.reduce((prev,current) => {
//   if (current.length > prev.length){
//    return current;
//   }else return prev;
// })

console.log(word)