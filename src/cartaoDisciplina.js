import {disciplinas} from "./utilidades.js";

function mostrarRequisitos(requisitos){
    var ou = `<p>`;
    for (const requisito of requisitos){
        for (const r of requisito){
            if(r != requisito[requisito.length - 1]) {
                ou += `${r} ou `
            }
            else {
                ou += `${r}`
            }
        }
        if(requisito != requisitos[requisitos.length - 1]){
            ou += `</p><p>`
        }
        else {
            ou += `</p>`
        }
    }
    return ou
}

export default function mostrarDisciplinas() {
    for (const disciplina of disciplinas) {
        const cartaoDisciplina = 
        `<div class="cartaoDisciplina" 
        style="
            width: 270px; 
            height: 140px; 
            border: solid 1px; 
            border-radius: 20px;
            display: flex; 
            align-items: center; 
            flex-direction: column;">
            <h1 style="
                height: 50px;
                font-size: 20px;
                text-align: center;
                vertical-align: ;
                border-bottom: solid 1px;
                width: 252px
            ">${disciplina.nome}</h1>
            <p style="font-size: 20; margin-top: 5px">${disciplina.sigla} - ${disciplina.tipo}</p>
            <p>${disciplina.creditos} créditos</p>
            <p>${mostrarRequisitos(disciplina.pre_requisitos)}</p>
        </div>`;
    
        document.getElementById("container-disciplinas").innerHTML += cartaoDisciplina;
    }
}