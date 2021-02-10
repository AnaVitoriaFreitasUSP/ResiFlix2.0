const email = document.getElementById("email");
const btn = document.getElementById("botao-enviar");
const form = document.getElementById("form");

btn.addEventListener("click", () => {
    if(!email.value == "") {
        form.innerHTML = `Foi enviado um e-mail para ${email.value} para que você redefina sua senha.`  
    } 
    
})
