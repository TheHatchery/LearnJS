//Pseudo code
//verbose functions
let variable = fetch(someFuntion);
//From this -->
Promise.then(gotData);
Promise.catch(gotError);
function gotData(data){
    console.log(data);
}
function gotError(err){
    console.log(err);
}

//Step one - Convert to anonymous functions
Promise.then(function(data){
    console.log(data);
});
Promise.catch(function (err){
        console.log(err);
});

//Step two - Convert to arrow - remove 'function' and place arrom after ()
Promise.then((data)=>{
    console.log(data);
});
Promise.catch((err)=>{
        console.log(err);
});

//Step three - Can then remove '()' '{}' ';' if only one line of code in the arrow function. And one line!
Promise.then(data=>console.log(data));
Promise.catch(err=>console.log(err));