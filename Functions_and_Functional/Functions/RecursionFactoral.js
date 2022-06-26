function factor(val){
  if(val > 0) {
    console.log(val);
    return val * factor(val - 1);//8 x 7 x 6 x 5 x 4 x 3 x 2 x is not greater than 0 so returns the else of: 1 | like a calculator it persists the answer until the end. 
  } else {
    return 1;
  }
  
  
  
}

console.log(factor(8));


