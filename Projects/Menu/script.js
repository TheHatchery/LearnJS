const topButton = document.querySelectorAll('.button');

// const dispState = ['none','flex'];//<--- Only required for option two
let state = 0; //<--- Only required for option three

topButton.forEach(element => {
    element.addEventListener('click', () => {
        
        const displayEle = document.querySelector(`#${element.id}A`);
        const cssEle = getComputedStyle(displayEle);

        //--OPTION ONE--
        // if(cssEle.display === 'none'){ //<--- Show and hide each sub button
        //     document.querySelector(`#${element.id}A`).style.display = 'flex';
        // }else if(cssEle.display === 'flex'){
        //     document.querySelector(`#${element.id}A`).style.display = 'none';
        // }

        // //--OPTION TWO--
        // if(cssEle.display === dispState[0]){ //<--- Less code but only worth for one button at a time
        //     document.querySelector(`#${element.id}A`).style.display = dispState[1];
        //     [dispState[0],dispState[1]] = [dispState[1],dispState[0]];
        // }

        //--OPTION THREE--
        const dispState = ['none','flex'];
        if(cssEle.display === dispState[state]){ //<--- Less code but only worth for one button at a time
            state = (state == 0) ? 1 : 0;
            document.querySelector(`#${element.id}A`).style.display = dispState[state]; 
        }
    
    });
});


