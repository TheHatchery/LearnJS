function setup() {
  //createCanvas(400, 400);
  noCanvas();
  test();
}

async function test(){
  let data; //To be able to use later for the return

  //Just a random wait for no reason
  console.log('Waiting to Start');
  const myPromise = new Promise(function(resolve){
    setTimeout(resolve, 2000);
  });

  await myPromise;
  console.log('Success');

  //Another random wait for no reason
  const myPromise2 = new Promise(function(resolve){
    setTimeout(resolve, 1000);
  });

  await myPromise2;
  console.log('Success Again');

  //Promisify the createFileInput function
  const myPromise3 = new Promise(function(resolve, reject) {
    createFileInput(fileSelected);
    //Callback for file function
    function fileSelected (file){
      console.log('File Loaded');
      data = file.data;
        if (data.length > 0){
        //Return a successful Promise 
        resolve('File Loaded'); 
          //Return the loaded data to the async function
          return data;
        }
    }
     // myReject();  // when error -- to add later
    });


  await myPromise3;
  //Show whats in the file in the console
  console.log(data);

}

