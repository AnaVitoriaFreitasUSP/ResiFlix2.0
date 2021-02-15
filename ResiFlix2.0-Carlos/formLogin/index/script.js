const btn = document.getElementById("botao-entrar");
const form = document.getElementById("campo-form");
const email = document.getElementById("email");
const senha = document.getElementById("senha")

btn.addEventListener("click", () => {
    if(!senha.value == "" && !email.value == "") {
        form.innerHTML = `Olá ${email.value}! Login efetuado com sucesso`
    }
})