const btn = document.getElementById("botao-entrar");
const form = document.getElementById("campo-form");
const email = document.getElementById("email");
const senha = document.getElementById("senha") 

btn.addEventListener("click", () => {
    if(email.value.search(/\@/) != -1 && email.value.search(/[.com]/) != -1){
        form.innerHTML = `Login efetuado com sucesso!`
    } 
})