//Run in the console 
//HIGHER ORDER FUNCTIONS

//Simple function
function sing(){
    console.log('la,la,la');
}

//Function with a callback
//This will now run lalala and then when complete run whatever callback fuction is passed into it
//A callback is just a function that runs when the higher order funtions has completed
function sing2(callback){
    console.log('la,la,la');
    callback();
}

//Create a usable callback
function dance(){
    console.log('twist and shout');
}

//Next add some error checking
function sing3(callback){
    console.log('la,la,la');
    if (callback instanceof Function){
    callback();
    }
}

//Next call singe and write its callback as an anonymous function
//So this is rather than defining a callback separately 
sing3(function(){console.log('twist and shout');})
//Arrow function version
sing3(()=>{console.log('twist and shout');})

//--------------------------------
//Functions that return a function

//let doubler = multiplier(2) will return a function into doubler
//double(4) will = 8
function multiplier(factor){
    return function(x){
        return x * factor;
    }
} 