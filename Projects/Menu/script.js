const topButton = document.querySelectorAll('.button');

const dispState = ['none','flex'];//<--- Only required for option two

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

        //--OPTION TWO--
        if(cssEle.display === dispState[0]){ //<--- Less code but only worth for one button at a time
            document.querySelector(`#${element.id}A`).style.display = dispState[1];
            [dispState[0],dispState[1]] = [dispState[1],dispState[0]];
        }


    
    });
});

// topButton[0].id

