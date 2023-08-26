

/*========== Ejercicios===============*/

/*===========================ejercicio 1========================= */

let num=545;
function damePar(num) {
    
    if(num % 2 == 0 ){
        
    console.log(`El numero ${num} es par` )
    }else{
    }
    console.log(`El numero ${num} es impar vuelve a intentar!!!...🙈`)
   
}
damePar(num);
 
/*===========================ejercicio 2========================= */

let num1=9;
let num2=9;
function dameNumMayor(num1,num2){

    if (num1 > num2) {
        console.log(`${num1} es mayor`)
     } else if (num1 === num2) {
        console.log("Los numeros son iguales")
     } else {
        console.log(`${num2} es mayor`)
     }
     
}
 dameNumMayor(num1,num2);

/*===========================ejercicio 3========================= */

let numeroImpar=5;
function multiploDeCinco(num) {
    if(( num % 5 ) == 0){
    
    	console.log(num + ' es multiplo de 5');
        
    }else{
    
    	console.log(num + ' no es multiplo de 5');
    
    }
   
 
    
}
multiploDeCinco(numeroImpar);

/*===========================ejercicio 4========================= */

let numeroProgresivo=3;

function dameTodos(num){
for (let i = 0;  i<=num; i++) {
 console.log(i)
    
}
}
dameTodos(numeroProgresivo)

/*===========================ejercicio 5========================= */

let palabra="repet";
let numRepet=15;

function damerepeticion(numRepet,palabra){
for (let i = 0; i < numRepet; i++) {
   console.log(palabra)

    }
}
damerepeticion(numRepet,palabra)


/*===========================ejercicio 8========================= */

const myArrayDos=[11,22,33,44,55,66,77,88,99];
let multiplicador=5;
function dameArray2(arr,multiplicador) {
    for(let first of arr) {
        console.log(first*multiplicador)
    }
    
}
dameArray2(myArrayDos,multiplicador)

/*===========================ejercicio 6========================= */

const myArray3=[11,22,33,44,55,66,77,88,99];
function dameArray3(array) {
    for( let i = 0 ; i < array.length ; i++){
		console.log("Yo soy el numero:" + array[i] + "y estoy en la posición  " +  i)
	}
    }
    

dameArray3(myArray3)

/*===========================ejercicio 7========================= */

const myArray4=[1,2,3,4,5,6,7,8,9,10];
function dameArray4(array) {
    for( let i = 0 ; i < array.length ; i++){
     if (i == 4) {
        continue;
     }
		console.log("Yo soy el numero:" + array[i] + "y estoy en la posición  " +  i)
	}
    }
    

dameArray4(myArray4)