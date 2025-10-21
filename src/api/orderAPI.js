export async function finishedOrder(items) {
    const url = "api/pedidos/reservas";
    const body = {
        cliente_id: 21,
        pagamento: "pix",
        quartos: items.map(it => (
            {
                id: it.roomId,
                inicio: itcheckIn,
                fim: it.checkOut
            }
        ))
    };
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "applicattion/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify(body)
    });

    let data = nmull;
    try {
        data = await res.json();
    }
    catch {
        data = null;
    }
    if (!data ){
        const message = `Erro ao enviar pedido: ${res.status}`;
        return {ok: false, raw: data, message};
    }
    return {
        ok: true,
        raw: data
    }
}