let cont = 0;

function bucle(numero){
    return new Promise((resolve,reject)=>{

        for(;numero>0;){

            cont = cont + (1000 * numero);
            console.log(numero)
            numero--;
        }
        setTimeout(()=>{
            resolve("Todas las promesas se resolvieron");
        },cont)
    })
}

Promise.all([bucle(4)])
.then((result)=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
});


