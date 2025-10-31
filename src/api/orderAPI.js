import { getToken } from "./authAPI.js";

export async function finishedOrder(metodoPagamento, reservations) {
    const url = "api/pedidos/reservas";
    const body = {
        cliente_id: 21,
        pagamento: metodoPagamento,
        quartos: reservations.map(it => (
            {
                id: it.roomId,
                inicio: it.checkIn,
                fim: it.checkOut
            }
        ))
    };

    const token = getToken?.();
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "applicattion/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        credentials: "same-origin",
        body: JSON.stringify(body)
    });
    let data = null;
    try {
        data = await res.json();
    }
    catch {
        data = null;
    }
    if (!res.ok){
        const message = `Erro ao enviar pedido: ${res.status}`;
        return {ok: false, raw: data, message};
    }
    return {
        ok: true,
        raw: data
    }
}