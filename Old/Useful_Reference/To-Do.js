//Global variables
let listArray = [];
 

//Adds the HTML needed for the 'To Do' item:
function addElementWithButton (textVal,id) { 
  //Create a template literals
  //A much easier way to push HTML elements dynamically
  let newElements = `
    <div class="${id}" id="toDo">
      <p>${textVal} <button id="${id}">X</button></p>
    </div>
  `
  const myFragment = document.createRange().createContextualFragment(newElements)
  document.getElementById('container').appendChild(myFragment)

  //Listener on each List items 'X' button
  const btn = document.querySelector(`#${id}`)
  btn.addEventListener('click', () => {
  console.log(`Worked ${id}`)
  })
}

//Get the user input from HTML
const input = document.querySelector('input');

//Listens for the user to type an item and click 'ADD':
button.addEventListener('mouseup', addToList);
function addToList(e) {
  const val = document.getElementById('input').value;
  listArray.push(val);
  let lastElement = val.replace(/ /g,"_");
  addElementWithButton(listArray[listArray.length-1],lastElement);
  //WE NOW HAVE DIVS WITH AN ID THAT WE CAN TARGET FOR DELETION 
  //ALSO TARGET THE WORD IN THE ARRAY TO DELETE
  console.log(listArray);
  //console.log(lastElement); 
  return listArray;
  
}

//SAVE - use local storage to save the listArray
//RESTORE LIST - use a foreach on the array and run a function that basically does all the stuff that happens when adding one by one but for each element of a stored array
