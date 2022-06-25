
const apiCallMulti = async (searchTerm) =>{//<-- API call to Unsplash
  const httpGet = `https://api.unsplash.com/search/photos?page=1&per_page=6&orientation=landscape&query=${searchTerm}&client_id=xjvMNvihkEt13KflQ0h4KFGz3t_ZK1mvLDT1WIGO1D8`
  const response = await fetch(httpGet);
  const data = await response.json();
  return data;
}

const countdownClock = (inputDate)=> {//<-- Math for countdown
  const timer = new Date(inputDate || '2025-12-25');//<--Using or allows a default value

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

startButton.addEventListener('click', async () => {//<-- Actions following button click
        ////-- Select date, title and start --////
        const titleVal = document.querySelector('#title').value;//<-- Get title text
        const dateVal = document.querySelector('#date').value;//<-- Get date value 
        const button = document.querySelectorAll('.start');//<-- Get intial screen elements
        button.forEach.call(document.querySelectorAll('.start'), function (element) {
            element.remove();//<-- Delete intial screen elements
        }); 
        ////-- Unsplash API to give background choice --////
        const newBackground = await apiCallMulti(titleVal || 'Sunsets');//<-- Api call to grab a 'title' based backgrounds
        newBackground.results.forEach((element,index) => {//<-- Loop thorugh the returned obj to get the urls needed
          const val = document.querySelector(`#id${index}`).style.backgroundImage = `url(${element.urls.regular})`;
        });
        document.querySelector('#choiceWrapperA').style.display = 'flex'; //<-- Show 6 Images HTML
        ////-- Background image selection --////
        const pictureElement = document.querySelectorAll(".inner");
        pictureElement.forEach(element => {
            element.addEventListener("click", () => {//<-- For each image see if its been chosen
                const id = element.style.backgroundImage;//<-- Store chosen images URL in variable
                const middle = document.querySelector('.pageWrapper');//<-- Get middle screen parent element
                middle.remove();//<-- Delete middle screen elements
    
                document.querySelector("#body").style.backgroundImage = `${id}`;//<--Change background to selected image
               
                document.querySelector('#final').style.display = 'block'; //<-- Show timer
                const hTag = document.querySelector('#titleText')//<-- Get title tag
                const textNode = document.createTextNode(titleVal);//<-- Create title
                hTag.append(textNode);//<-- Add title
    
                countdownClock(dateVal);//<-- Intial Call
                setInterval(()=> countdownClock(dateVal), 1000);//<-- Call every second to give countdown
            });
        })
  });





////-- Ignor just some usefull bits learnt but not needed --////
////--> Returns the field value as you type
// const inputHTML = document.getElementById('title')
// inputHTML.addEventListener('input', (evt) => {
//     console.log(inputHTML.value);
// });
