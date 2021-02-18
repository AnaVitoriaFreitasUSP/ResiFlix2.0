const email = document.getElementById("email");
const btn = document.getElementById("botao-enviar");
const form = document.getElementById("form");

btn.addEventListener("click", () => {
    let re = /\S+@\S+\.\S+/;
    if(re.test(email.value)){
        let confirmacao = document.createElement("h3");
        confirmacao.innerText = `Foi enviado um e-mail para "${email.value}" para que você redefina sua senha.`
        confirmacao.classList.add("confirmacao")
        confirmacao.style.color = "white";
        form.innerHTML = ""
        form.appendChild(confirmacao)
    } 
})
