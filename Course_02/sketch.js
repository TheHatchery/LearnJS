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
  });
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
  });
}//Returns a Promise

let hasRun = 0;//Check if function has already run and added <P> elements
function searchText(){
    //Delete any existing page elements
    if(hasRun){
    const elementA = document.getElementById('a');
    elementA.remove();
    const elementB = document.getElementById('b');
    elementB.remove();    
    const elementC = document.getElementById('c');
    elementC.remove(); 
  }

    ////GET DATA//
  
    ////Word to search for
    textVal = textInput.value();
    ////Data to search through
    textArray = data.split(/\W+/);
    textArray.unshift(' ');

    ////WORK WITH DATA////
    
    ////Standard forEach loop:
    // let count = 0;
    // function check(item){
    //   if(item===textVal){
    //     count++;
    //   } 
    // }
    // textArray.forEach(check,textVal);
  
    ////Arrow forEach loop:
    // let count = 0;
    // textArray.forEach(item=>{
    //   if(item===textVal){
    //     count++;
    //   } 
    // },textVal);
  
    ////Reduce function:
    // let counter = 0;
    // function check(acc,val){
    //   if (val === textVal){
    //     counter++;
    //     return counter;
    //   }
    //   return counter;
    // }
    // let count = textArray.reduce(check);
    // console.log(count);
  
    ////Basic findIndex:
    // let found = textArray.findIndex(val => val===textVal);
    // console.log(found);
  
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
    hasRun = hasRun +1;

    ////PAGE ELEMENTS

    let a = createP(`THE WORD "${textVal.toUpperCase()}" WAS FOUND ${numFound} TIMES` + "<br>" + `IT WAS FOUND IN POSITIONS: ${posArray}`); 
    a.id('a');
    a.hide();
    let b = createP(`THE WORD "${textVal.toUpperCase()}" WAS FOUND JUST ${numFound} TIME` + "<br>" + `IT WAS FOUND IN POSITION: ${posArray}`); 
    b.id('b');
    b.hide();
    let c = createP(`THE WORD "${textVal.toUpperCase()}" WAS NOT FOUND - TRY AGAIN`);
    c.id('c');
    c.hide();
  
    if(numFound>1){
      a.show();
    }else if (numFound===1){
      b.show();  
    }else if (numFound<1){
      c.show();
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
  createP('WHAT WORD WOULD YOU LIKE TO SEARCH FOR?');
  textInput = createInput();
  //changed invokes the searchText funchtion when the user inputs a word
  textInput.changed(searchText);
}


