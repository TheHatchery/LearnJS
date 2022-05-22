function setup() {
  //createCanvas(400, 400);
  noCanvas();
  test();
}

//Set up functions to run asynchronously 
function delay(time){
  return new Promise(resolve=>{
    setTimeout(resolve, time);
    //Once the timer has run the resolve fuction runs which then allowes the delay function to return the Promise 
  })
}

let data; //Global Variable - to be able to use later for the return
function loadingFile(){
  return new Promise(resolve=>{
    createFileInput(fileSelected);
    function fileSelected (file){
      //This is a callback function that only runs when the         file is loaded - file variable becomes the uploaded file
      data = file.data;
      resolve(data);
    }
  })
}

async function test(){
  createP('Just some waiting about... wont be long')

  //Just a random wait for no reason
  await delay(2000);
  console.log('Success');

  //Another random wait for no reason
  await delay(2000);
  console.log('Success Again');
  createP('Choose A File Using the Selector Below')

  //Waits for the user to select a file and it load
  await loadingFile();
  //Show whats in the file in the console
  createP('This is your file data:')
  createP(data);

  textInput = createInput();
  textInput.changed(newText);
  function newText(){
    textVal = textInput.value();
    createP(textVal);
    let wordLength = textVal.length;
    createP(`The word ${textVal} is ${wordLength} letters long`);
  
  }
  

}





