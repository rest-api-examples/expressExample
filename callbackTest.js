setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//sama kuin edellä
setTimeout(function doSomething(){
    console.log("v2. Demonstrating the callbacks");
},2000);

console.log("The application is started");

//edellä funktion nimeä ei tarvita eli voidaan
//käyttää anononyymifunktiota 
setTimeout(function (){
    console.log("v3. Demonstrating the callbacks");
},2000);

console.log("The application is started");

//ns. lambdafuntiolla 
setTimeout(()=>{
    console.log("v4. Demonstrating the callbacks");
},2000);

console.log("The application is started");