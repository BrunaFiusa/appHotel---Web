import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Grid from "../components/Grid.js";
import RoomCard from "../components/Card.js";
import DataSelector from "../components/DataSelector.js";
import { listAvaibleQuartosRequest } from "../api/quartosAPI.js";

export default function renderHomePage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    // const grid = Grid();
    // grid.style.marginTop = '10%';
    // divRoot.appendChild(grid);

    const hero = Hero();
    divRoot.appendChild(hero);

    const selector = DataSelector();
    divRoot.appendChild(selector);

    const [dateChekin, dateCheckout] = selector.querySelectorAll('input[type="date"]');
    const qtdHospedes = selector.querySelector('select');
    const btnDateSelec = selector.querySelector('button');

    const divCard = document.createElement('div');
    divCard.className ="divCard";
    divCard.id = "cards-result";
    divCard.innerHTML = '';
 
    btnDateSelec.addEventListener("click", async (evento) =>{
        evento.preventDefault();
        const inicio = (dateChekin?.value || "").trim();
        const fim = (dateCheckout?.value || "").trim();
        const qtd = parseInt(qtdHospedes?.value || "0", 10);
        try{
            const quartos = await listAvaibleQuartosRequest({inicio, fim, qtd});
            if ( ! quartos.length) {
                return;
            }
            divCard.innerHTML = '';
            quartos.forEach((itemCard, i) => {
                divCard.appendChild(RoomCard(itemCard, i));
            });
            //Após intervalo: prencher as infos dos quartos nos cards ou avisar ao cliente que nao há quarto disponivel
        }catch(erro){
            console.log(erro);
        }
    });

    divRoot.appendChild(divCard);

    const footer = document.getElementById('footer');
    footer.innerHTML = '';
    
    const footers = Footer();
    footer.appendChild(footers);
}