let textInput;
let test;

function setup() {
  noCanvas();
  textInput = createInput();
  textInput.changed(newText);
  
}


function newText(){
  textVal = textInput.value();
  createP(textVal);
  let wordLength = textVal.length;
  createP(`The word ${textVal} is ${wordLength} letters long`)

}


