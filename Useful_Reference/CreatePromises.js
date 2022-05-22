function setup() {
  //createCanvas(400, 400);
  noCanvas();
  test();
}

//Set up functions to run asynchronously 
function delay(time){
  return new Promise(resolve=>{
    setTimeout(resolve, time);
  })
}

let data;
function loadingFile(){
  return new Promise(resolve=>{
    createFileInput(fileSelected);
    function fileSelected (file){
      console.log('File Loaded');
      data = file.data;
        if (data.length > 0){
        //Return a successful Promise 
        resolve('File Loaded'); 
          //Return the loaded data to the async function
          //console.log(data);
          return data;
        }
    }
  })
}

async function test(){
  //let data; //To be able to use later for the return

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

