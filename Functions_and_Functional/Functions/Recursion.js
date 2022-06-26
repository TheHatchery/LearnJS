////USING RECURSION
// function firstOccurance(array, index, searchWord){
//   if (array[index] === searchWord){
//     console.log(index) 
//   }else {
//     firstOccurance(array,index+1,searchWord);
//   }
// }

// firstOccurance(myArray,0,'to')

////Multiply 8x7x6x5x4x3x2x1
function FirstFactorial(num) {
	if (num > 0) {
			return num * FirstFactorial(num - 1);
	} else {
			return 1;
	}
}
   
FirstFactorial(8);

////FIND THE LENGTH OF LONGEST WORD - NEED TO DEFINE AN ARRAY:
// function findLongestWordLength(array) {
//   console.log(array);
// //  /* BASE CALL*/
//   if (array.length === 1) {
//     return array[0].length;
//   }
// // /* RECURSIVE CALL*/
//   return Math.max(
//     array[0].length,
//     findLongestWordLength(array.slice(1))
//   );
// }

// console.log(
//   findLongestWordLength(myArray)
//   );