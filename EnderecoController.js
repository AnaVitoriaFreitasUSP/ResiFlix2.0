class EnderecoController {
    buscarEndereco() {
        let model = new EnderecoModel();
        model.buscarDados();

    }
}

let controller = new EnderecoController();
const btn = document.getElementById("procurar-dados");
btn.addEventListener("click", () => {
    controller.buscarEndereco();
})