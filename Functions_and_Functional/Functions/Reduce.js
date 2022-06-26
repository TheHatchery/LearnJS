const myNums = [2,6,13,4,9,20,20,1,20,7,6,6,6,2,6];
const myWords  = ['this','is','this','is','an','an','accumulated','this','array','forever',]


  //console.log('acc ' + acc);
  //console.log('next ' + nextVal);

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



//Find Dups in Array
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


//FIND DUPS IN ARRAY - Bases on input search term
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

//remove duplicates
  const out = myNums.reduce((acc, nextVal) => {
      acc[nextVal] = nextVal;
      return acc;    
  },{}); //console.log(out)




