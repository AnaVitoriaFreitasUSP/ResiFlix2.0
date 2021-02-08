class EnderecoView {
    constructor() {
        throw new Error("Erro não identificado! Por favor, tente novamente!")
    }

    static desenhar(endereco) {
        return `
            <form class="formulario-content">
                <label>Logradouro:</label><input type="text">${endereco.logradouro}
                <label>Numero: <input type="number"></label>
                <label>Complemento <input type="number"></label>
                <label>Bairro: <input type="text">${endereco.bairro}</label>
                <label>Cidade: <input type="text">${endereco.localidade}</label>
                <label>Estado: <input type="text">${endereco.uf}</label>
        `
    }
}