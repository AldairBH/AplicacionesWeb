let result = undefined;
let numero = 0;
console.log(result)


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  numero = getRandomInt(101)

function numeroAleatorio(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(numero);
        },2000)
    })
}

function numeroCuadrado(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(numero * numero);
        },3000)
    })
}

function numeroRaizCuadrada(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(Math.sqrt(numero * numero));
        },1000)
    })
}

Promise.all([numeroAleatorio(),numeroCuadrado(),numeroRaizCuadrada()])
.then((result)=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
});


