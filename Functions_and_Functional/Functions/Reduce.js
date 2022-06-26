const myNums = [2,6,13,4,9,20,20,1,20,7,6,6,6,2,6];
const myWords  = ['this','is','this','is','an','an','accumulated','this','array','forever',]


const outputWords = myWords.reduce((acc, nextVal) => {
  return acc = acc + ' ' + nextVal
}); //console.log(outputWords);

const outputNums = myNums.reduce((acc, nextVal) => {
  return acc = acc + nextVal 
}); //console.log(outputNums);

const word = myWords.reduce((prev,current) => {
  if (current.length > prev.length){
   return current;
  }else return prev;
})//console.log(word);


///FIND DUPS IN ARRAY
function howManyOccurrences(array, value) {
  const outputDup = array.reduce((acc, nextVal) => {
      if (nextVal in acc){
        acc[nextVal]++;
      }
      else{
        acc[nextVal] = 1;
      }
      return acc;    
  },{});
  
  if (value in outputDup){
  return outputDup[value];
  }else return 'nothing';
} console.log(howManyOccurrences(myWords, 'this'));


//FIND DUPS IN ARRAY (more longwinded) - Bases on input search term
const duplicatesInArray = (arrayName, search) =>{
  let count = 0;
  let arrayLen = 0;
    const outputDup = arrayName.reduce((acc, nextVal) => {
      arrayLen ++;
      if(acc === nextVal){
       count ++; 
         if (arrayLen === arrayName.length){
             return count;
          } else return acc;
       } else if (arrayLen === arrayName.length){
           return count;
       } else return acc; 
    },search);
  return outputDup;
}; //console.log(duplicatesInArray(myNums, 20));

//REMOVES DUPLICATES OUTPUTS OBJECT
  const out = myNums.reduce((acc, nextVal) => {
      acc[nextVal] = nextVal;
      return acc;    
  },{}); console.log(out)


//REMOVES CHOSEN WORD
const removeWord = (word)=>{
    const add = myWords.reduce((accum,current)=>{
        if (current === word){
            return accum = accum;
        } else return accum = accum+' '+current;  
    }, '');
    const valueArray = add.split(' ');
    valueArray.shift();
    return valueArray;
}; console.log(removeWord('this'));

//REMOVES CHOSEN NUMBER
const removeNumber = (num)=>{
    const add = myNums.reduce((accum,current)=>{
        if (current === num){
            return accum = accum;
        } else return accum = accum+' '+current;  
    }, '');
    const valueArray = add.split(' ').map(Number);
    valueArray.shift();
    return valueArray;
}; console.log(removeNumber(20));








