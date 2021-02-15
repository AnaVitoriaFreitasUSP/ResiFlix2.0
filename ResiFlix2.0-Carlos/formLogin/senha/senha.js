const email = document.getElementById("email");
const btn = document.getElementById("botao-enviar");
const form = document.getElementById("form");

btn.addEventListener("click", () => {
    if(email.value.search(/\@/) != -1 && email.value.search(/[.com]/) != -1){
        form.innerHTML = `Foi enviado um e-mail para ${email.value} para que você redefina sua senha.`
    } else {
        alert(`Coloque um e-mail válido`);
    }
})
