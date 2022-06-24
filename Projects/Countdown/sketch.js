const apiCall = async (searchTerm) =>{
  const httpGet = `https://api.unsplash.com/photos/random?orientation=landscape&query=${searchTerm}&client_id=xjvMNvihkEt13KflQ0h4KFGz3t_ZK1mvLDT1WIGO1D8`;
  const response = await fetch(httpGet);
  const data = await response.json();
  return data;
}

startButton.addEventListener('click', async () => {//<-- Actions following button click
  const titleVal = document.querySelector('#title').value;//<-- Get title text
  const dateVal = document.querySelector('#date').value;//<-- Get date value 
  const button = document.querySelectorAll('.start');//<-- Get intial screen elements
  button.forEach.call(document.querySelectorAll('.start'), function (element) {
      element.remove()//<-- Hide intial screen elements
  }); 

  const newBackground = await apiCall(titleVal);//<-- Api call to grab a 'title' based background
  

  document.querySelector("#body").style.backgroundImage = `url(${newBackground.urls.regular})`;
  document.querySelector('#Wrapper').style.display = 'block'; //<-- Show timer
  const hTag = document.querySelector('#titleText')//<-- Add custom title
  const textNode = document.createTextNode(titleVal);
  hTag.append(textNode);
  
  
  const countdownClock = ()=>{//<-- Math for countdown
      const timer = new Date(dateVal || '2025-12-25');//<--Using or allows a default value
    console.log(dateVal)
      const currentDate = new Date();
      const totalSeconds = (timer - currentDate) / 1000;
    
      const days = Math.floor(totalSeconds / 3600 / 24);
      const daysContent = document.querySelector('#days')
      daysContent.textContent = `${days}`;
    
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const hoursContent = document.querySelector('#hours')
      hoursContent.textContent = `${hours}`;
    
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const minutesContent = document.querySelector('#minutes')
      minutesContent.textContent = `${minutes}`;
    
      const seconds = Math.floor(totalSeconds) % 60;
      const secondsContent = document.querySelector('#seconds')
      secondsContent.textContent = `${seconds}`;
  }
  countdownClock();//<-- Intial Call
  setInterval(countdownClock, 1000);//<-- Call every second to give countdown
   
})




////--> Returns the field value as you type
// const inputHTML = document.getElementById('title')
// inputHTML.addEventListener('input', (evt) => {
//     console.log(inputHTML.value);
// });
