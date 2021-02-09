const $ = document.querySelector.bind(document);
const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://viacep.com.br/ws/${cep.value}/json`, false);
    xhr.addEventListener("load", () => {
        let dadosAPI = JSON.parse(xhr.responseText);
        for(const elemento in dadosAPI) {
            if($(`#${elemento}`)) {
                $(`#${elemento}`).value = dadosAPI[elemento];
            }
        }
    }) 
    xhr.send();
})