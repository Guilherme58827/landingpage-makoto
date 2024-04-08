
const projetosInativos= document.querySelectorAll(".projeto:not(.ativo)");
const botaoMostrarProjetos =document.querySelector(".btn-mostrar-projetos");
function mostrarMaisProjetos(){
    projetosInativos.forEach(p => {
        p.classList.add('ativo');

    })
}
function esconderBotão() {
    botaoMostrarProjetos.classList.add('remover');
}
botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotão();
});
    


