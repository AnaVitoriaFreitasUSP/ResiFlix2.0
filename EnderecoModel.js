const container = document.getElementById("dados-logradouro");
class EnderecoModel {
    constructor(logradouro, bairro, localidade, uf) {
        this._logradouro = logradouro;
        this._bairro = bairro;
        this._localidade = localidade;
        this._uf = uf;
    }

    getEndereco() {
            return {
                logradouro: this._logradouro,
                bairro: this._bairro,
                localidade: this._localidade,
                uf: this._uf,
            }
    }

    buscarDados() {
        let cep = document.getElementById("cep").value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `https://viacep.com.br/ws/${cep}/json`, false)
        xhr.addEventListener("load", () => {
        if(xhr.status == 200) {
            let dadosAPI = JSON.parse(xhr.responseText);
            let endereco = new EnderecoModel(
                dadosAPI.logradouro,
                dadosAPI.bairro,
                dadosAPI.localidade,
                dadosAPI.uf
            );
            container.innerHTML = EnderecoView.desenhar(endereco.getEndereco())
            
        } else {
            throw new Error("CEP não existente!")
        }
        })
        xhr.send();
    }
}