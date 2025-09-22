/* getToken() é uma função que retorna o valor do token armazenado no localStorage(),
para que o usuário permaneça logado mesmo que mude de página e não tenha que "re-logar" */

import { getToken } from "./authAPI";

/*Listar todos os quartos independendo de filtrio*/
export async function listAllRoomsRequest() {
    /*Retorna o valor do token armazenado (que comprova a autenticação do usuário)*/
    const token = getToken();
    const response = await fetch("api/quartos", {
        method: "GET",
        headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })


}

