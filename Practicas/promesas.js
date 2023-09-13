let result = undefined;

console.log(result)
function waitUntil(message){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(message);
        },2000);
    });
}
// waitUntil("Puras promesas aqui")
// .then(result=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });

function multiplicar(num1, num2){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num1*num2);
        },1500)
    })
}

function dividir(num1,num2){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve(num1/num2), 2000);
    })
}

//Ejecuta todas las promesas que se envian en un arreglo
//Si una de esas promesas falla, devuelve solo la excepcion 
// Promise.all([multiplicar(1,2),dividir(1,2), 
//     "Promesa aqui",35, true])
// .then((result)=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// });


function multiplicarLento(num1, num2){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num1*num2);
        },2000)
    })
}

function dividirRapido(num1,num2){
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve(num1/num2), 1000);
    })
}

//Devuelve el resultado de la primer promesda en resolverse
//Si alguna falla y es la mas rapida, se devuelve en forma de excepcion o error
// Promise.race([multiplicarLento(1,2),dividirRapido(1,2)])
// .then((result)=> {
//     console.log('THEN', result);
// })
// .catch((error)=>{
//     console.log('CATCH',error);
// })