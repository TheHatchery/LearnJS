let prompt;
function setup() {
  //createCanvas(400, 400);
  noCanvas();
  textSearch();
}

//Set up functions to run asynchronously 
function delay(time){
  return new Promise(resolve=>{
    setTimeout(resolve, time);
    //Once the timer has run the resolve fuction runs which then allowes the delay function to return the Promise 
  })
}//Returns a Promise

let data; //Global Variable - to be able to use later for the return
function loadingFile(){
    createP('CHOOSE A FILE USING THE \'CHOOSE FILE\' BUTTON');
  return new Promise(resolve=>{
    createFileInput(fileSelected);
    function fileSelected (file){
      //This is a callback function that only runs when the file is loaded - file variable becomes the uploaded file
      data = file.data;
      resolve(data);
    }
  })
}//Returns a Promise

function searchText(){
    ////GET DATA//
  
    ////Word to search for
    textVal = prompt.value();
    ////Data to search through
    textArray = data.split(/\W+/);
    textArray.unshift(' ');

    ////WORK WITH DATA////
    
    ////Reduce to find word and locatons in the array:  
    let posArray=[];
    function check(acc, val, index){
      acc = textVal;
          //console.log(`acc = ${acc}`);
          //console.log(`val = ${val}`);
          // console.log(`index = ${index}`);
      
      if(acc===val){
        posArray.push(index);
          //console.log(posArray);
      }
      return posArray;
    }
  
    textArray.reduce(check);
    let numFound = posArray.length;

    ////PAGE ELEMENTS
    if(numFound>1){
      resultP.html(`THE WORD "${textVal.toUpperCase()}" WAS FOUND ${numFound} TIMES` + "<br>" + `IT WAS FOUND IN POSITIONS: ${posArray}`)
    }else if (numFound===1){
      resultP.html(`THE WORD "${textVal.toUpperCase()}" WAS FOUND JUST ${numFound} TIME` + "<br>" + `IT WAS FOUND IN POSITION: ${posArray}`)  
    }else if (numFound<1){
      resultP.html(`THE WORD "${textVal.toUpperCase()}" WAS NOT FOUND - TRY AGAIN`)
    }
    
}

async function textSearch(){
  //createP('Just some waiting about... wont be long')

  //Just a random wait for no reason
  await delay(500);
  console.log('Success');

  //Another random wait for no reason
  await delay(500);
  console.log('Success Again');

  //Waits for the user to select a file and it load
  await loadingFile();
  //Show whats in the file in the console

  //Text input to get the users word
  createP('WHAT WORD WOULD YOU LIKE TO SEARCH FOR?')
  prompt = createInput();
  prompt.attribute('size', '30');
  button = createButton('submit');
  button.mousePressed(searchText);
  resultP = createP(''); 
}