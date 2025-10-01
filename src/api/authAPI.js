export async function loginRequest(email, senha) {
    const dados = {email, senha};
    const response = await fetch("api/login/clientes", {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json"
        },

        body: JSON.stringify(dados),

        /* URL da requisição é a mesma da origem do front (mesmo protocolo http/ mesmo domínio - 
        local/mesma porta 80 do servidor web Apache) Front: http://localhost/MeuSite/public/index.html
        Back: http://localhost/MeuSite/api/login.php*/
        credentials: "same-origin"
    });

    // Interpreta a resposta como JSON
    let data = null;
    try {
        data = await response.json();
    }
    catch {
        // Se não for JSON válido, data permanece null
        data = null;
    }

    if (!data || !data.token) {
        const message= "Resposta inválida do servidor. Token ausente!";
        return {ok: false, token: null, raw: data, message};
    }

    return {
        ok: true,
        token: data.token,
        raw: data 
    };
}

    /* Função para salvar a chave token após autenticação confirmada, ao salvar no local storage,
    o usuario poderá mudar a pagina, fechar o site e ainda assim permenecer logado, DESDE QUE O TEMPO NÃO TENHA EXPIRADO (1H)*/
    export function saveToken(token) {
        localStorage.setItem("auth_token", token);
    }

    /* Recuperar a chave a cada página que o usuario navegar */
    export function getToken(token) {
        return localStorage.getItem("auth_token");
    }

    /* Função para renovar a chave token quando o usuario deslogar*/
    export function clearToken() {
        localStorage.removeItem("auth_token");
    }