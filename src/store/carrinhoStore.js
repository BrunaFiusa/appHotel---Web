/* Usuario faz login --> filtra quartos por um periodo(chek-in/check-out) -->  seleciona um quarto para reservar 
-> cria-se um pedido com esse quarto -> ususario pode adicionar mais reservas ao mesmo pedido -> finaliza pedido;
(pedido armazendo como rascunho no localstorage: getItem() para obter dados, setItem() */
 
const key = "GHR_cart"
 
export default function setCart(cart){
    localStorage.setItem(key, JSON.stringify(cart));
}
 
export function getCart(){
    try{
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : { status: "draft", items: []};
    }catch{
        return {status: "draft", items: []};
    }
}
 
export function addItemToCart(item) {
    const cart = getCart();
    cart.items.push(item);
    setCart(cart);
    return cart;
}

export function removeItemFromCart(i) {
    const cart = getCart();
    cart.items.splice(i, 1);
    setCart(cart);
    return cart;
}

export function clearCart(i) {
    setCart({
            status: "draft",
            item: []
        });
}

export function getTotalItems() {
    const { items } = getCart();
    const total = items.reduce((acc, it) =>
        acc + Number(it.subtotal || 0), 0
    );
    return {
        total,
        qtd_items: items.length
    }; 
}