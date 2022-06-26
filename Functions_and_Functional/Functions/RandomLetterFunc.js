const myString = 'Tray again fail again fail b e t t e r    ';

randomLetter(myString);

function randomLetter (input){

  let myNum = Math.floor(Math.random() * input.length);
  let stringChar = input.charAt(myNum);
  
  if(stringChar===' '){
    randomLetter(input);//recursion to start it again
  }else console.log(`The random letter chosen is at index ${myNum} is ${stringChar}`);
  
}