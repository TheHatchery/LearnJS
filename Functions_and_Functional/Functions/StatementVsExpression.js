//Statment Function
//Hoisted
//This function is available throughout the scipt context
//So for example the console log work before of after it.
console.log('before '+makeBread(2));
function makeBread(qty){
  return '🍞'.repeat(qty);
}
console.log('after '+makeBread(2));

//Expression Funtion 
//Not Hoisted 
//So can only reference it after the decliration
//console.log(makeBeer(5)); 
const makeBeer = function(qty){
  return '🍺'.repeat(qty);
}
console.log(makeBeer(5));  


//Expression Function but as an Arrow function 
const makePizza = qty => '🍕'.repeat(qty);
console.log(makePizza(3));   