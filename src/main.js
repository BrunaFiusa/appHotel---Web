import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";

//Configuração de rotas 
const routes = {
    "/login": renderLoginPage,
    "/register": renderRegisterPage
    //Novas páginas adicionadas conforme desenvolvidas
};

//Obtém o caminho atual a partir da hash da URL
function getPath() {
    //obtém o hash (ex. "#login/"), remove o # e tira espaço
    const url = (location.hash || "").replace(/^#/, "").trim(); 
    console.log(url);

    //retorna url se começar com "/", se não, retorna "//login" como padrão
    return url && url.startsWith("/") ? url : "/login"; 
}

//Decide o que renderiza com base na rota atual
function renderRoutes() {
    const url = getPath(); //Lê a rota atual, ex. "/register"
    const render = routes[url] || routes["/login"]; //Busca esta rota no mapa
    render(); //Executa a função de render na página atual
}

window.addEventListener("hashchange", renderRoutes);
//Renderização
document.addEventListener('DOMContentLoaded', renderRoutes);

console.log(routes);