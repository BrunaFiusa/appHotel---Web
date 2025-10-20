export async function finishedOrder(items) {
    const url = "api/pedidos/reservas";
    const body = {
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

    if (!res.ok ){
        const message = `Erro ao enviar pedido: ${res.status}`;
        throw new Error(message);
    }
    return res.json();
}