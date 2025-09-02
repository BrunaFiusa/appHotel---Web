export async function loginRequest(email, senha) {
    const response = await fetch("/api/login.php", {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: new URLSearchParams({ email, senha}).toString(),

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
    return {
        ok: true,
        user: data.user ?? null,
        raw: data 
    };
}