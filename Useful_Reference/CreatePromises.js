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
      console.log('File Loaded');
      data = file.data;
        if (data.length > 0){
        //Return a successful Promise along with the data variable
        resolve(data); 
        //resolve function argument becomes the data variable which is then returned by the loadingFile function with the Promise
        }
    }
  })
}

async function test(){

  //Just a random wait for no reason
  await delay(2000);
  console.log('Success');

  //Another random wait for no reason
  await delay(2000);
  console.log('Success Again');

  //Waits for the user to select a file and it load
  await loadingFile();
  //Show whats in the file in the console
  console.log(data);

}





