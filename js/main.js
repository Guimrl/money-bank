import ehUmCPF from "./validaCPF.js";
import ehMaioDeIdade from "./validaIdade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));

});

function verificaCampo(campo) {
    if(campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if(campo.name == "aniversario" && campo.value != '') {
        ehMaioDeIdade(campo);
    }
}