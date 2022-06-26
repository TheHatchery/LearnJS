const keysInput = {
    a: false,
    d: false,
    [' ']: false,
};

document.addEventListener('keydown', (event)=>{
    keysInput[event.key] = true;
    console.log(keysInput);
});

document.addEventListener('keyup', (event)=>{
    keysInput[event.key] = false;
    console.log(keysInput);
});
