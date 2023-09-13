let promise;

function createPromise() {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      resolve("Promesa resuelta después de 5 segundos");
      console.log("Promesa resuelta");
    }, 5000);

    function cancel() {
      clearTimeout(timeoutId);
      reject("Promesa cancelada");
    }
    promise = cancel;
  });
}

document.getElementById("startButton").addEventListener("click", () => {
  promise = null; // Reinicia la variable global promise
  createPromise()
    .then((message) => {
      document.getElementById("result").textContent = message;
    })
    .catch((error) => {
      document.getElementById("result").textContent = error;
    });
});

document.getElementById("cancelButton").addEventListener("click", () => {
  if (promise) {
    promise(); 
    document.getElementById("result").textContent = "Promesa cancelada";
    console.log("Promesa Cancelada");
  }
});