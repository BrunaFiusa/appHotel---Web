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

    const btnSearchRoom = selector.querySelector('button');

    btnSearchRoom.addEventListener("click", async (evento) =>{
        evento.preventDefault();
        const inicio = "2025-10-05";
        const fim = "2025-12-30";
        const qtd = 2;
        try{
            const quartos = await listAvaibleQuartosRequest({inicio, fim, qtd});
            //Após intervalo: prencher as infos dos quartos nos cards ou avisar ao cliente que nao há quarto disponivel
        }catch(erro){
            console.log(erro);
        }
    });

    const divCard = document.createElement('div');
    divCard.innerHTML = '';
    divCard.className ="divCard";

    for (var i = 0; i<3; i++ ){
        const roomcard = RoomCard(i);
        divCard.appendChild(roomcard);
    }

    divRoot.appendChild(divCard);

    const footer = document.getElementById('footer');
    footer.innerHTML = '';
    
    const footers = Footer();
    footer.appendChild(footers);
}