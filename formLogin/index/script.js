const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btn = document.getElementById("botao-entrar");

let re = /\S+@\S+\.\S+/;

btn.addEventListener("click", ()=>{
    if (re.test(email.value) && senha.value != "") {
        document.getElementById("link").setAttribute("href", "./Home/index.html");
    }
});
