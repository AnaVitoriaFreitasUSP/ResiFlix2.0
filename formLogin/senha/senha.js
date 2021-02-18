const email = document.getElementById("email");
const btn = document.getElementById("botao-enviar");
const form = document.getElementById("form");

btn.addEventListener("click", () => {
    if(email.value.search(/\@/) != -1 && email.value.search(/[.com]/) != -1){
        let confirmacao = document.createElement("h3");
        confirmacao.innerText = `Foi enviado um e-mail para "${email.value}" para que você redefina sua senha.`
        confirmacao.classList.add("confirmacao")
        confirmacao.style.color = "white";
        form.innerHTML = ""
        form.appendChild(confirmacao)
    } else {
        alert(`Coloque um e-mail válido`);
    }
})
