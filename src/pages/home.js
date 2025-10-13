import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Grid from "../components/Grid.js";
import RoomCard from "../components/Card.js";
import DataSelector from "../components/DataSelector.js";
import { listAvaibleQuartosRequest } from "../api/quartosAPI.js";
import CardLounge from "../components/CardLounge.js";

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

    /*Criar uma constante que armazena o valor da data de hoje*/
    const dateToday = new Date().toISOString().split("T")[0];

    const [dateChekin, dateCheckout] = selector.querySelectorAll('input[type="date"]');
    dateChekin.min = dateToday;
    dateCheckout.min = dateToday;

    const qtdHospedes = selector.querySelector('select');
    const btnDateSelec = selector.querySelector('button');

    const divCard = document.createElement('div');
    divCard.className ="divCard";
    divCard.id = "cards-result";

    const cardGroupInfra = document.createElement('div');
    cardGroupInfra.className = "cards";

    const tituloInfra = document.createElement('h2');
    tituloInfra.textContent = "Conheça nosso Hotel";
    tituloInfra.style.textAlign = "center";

    const lougeItems = [
        {
            path: "restaurante.webp", title:"Restaurante", text: "Nosso restaurante é um espaço agradável e familiar!"
        },
    ];

    for (let i = 0; i< lougeItems.length; i++){
        const cardLounge = CardLounge(lougeItems[i], i);
        cardGroupInfra.appendChild(cardLounge);
    }

    function getMinDateCheckout(dateCheckIn) {
        const minDaily = new Date(dateCheckIn);
        minDaily.setDate(minDaily.getDate() + 1);
        return minDaily.toISOString().split('T')[0];
    }

    /*Evento para monitorar a alteração da data de check-in para mudar a data da check-out*/
    dateChekin.addEventListener("change", async (e) => {
        if (this.value){
            const minDateCheckout = getMinDateCheckout(this.value);
            dateCheckout.min = minDateCheckout;
        }
    });

 
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
    divRoot.appendChild(tituloInfra);
    divRoot.appendChild(cardGroupInfra);

    const footer = document.getElementById('footer');
    footer.innerHTML = '';
    
    const footers = Footer();
    footer.appendChild(footers);
}