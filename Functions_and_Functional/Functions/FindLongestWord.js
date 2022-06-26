
function setup() {
  noCanvas();
  textSearch();
}

let prompt;
let word;
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
  

    ////Data to search through
    textArray = data.split(/\W+/);
    textArray.unshift(' ');
    


    ////WORK WITH DATA////
    textArray.forEach(val => {
        if(val.length > length){
        length = val.length;
        return word = val;
      }
    })
     
    console.log(word);
    resultP.html(`THE LONGEST WORD WAS: ${word.toUpperCase()}`);
}

async function textSearch(){

  //Waits for the user to select a file and it load
  await loadingFile();
  //Show whats in the file in the console

  //Text input to get the users word
  createP('')

  button = createButton('CLICK TO FIND THE LONGEST WORD');
  button.mousePressed(searchText);
  resultP = createP(''); 
}
