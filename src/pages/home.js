import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/Card.js";
import DataSelector from "../components/DataSelector.js";

export default function renderHomePage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const hero = Hero();
    divRoot.appendChild(hero);

    const divCard = document.createElement('div');
    divCard.className ="divCard";

    for (var i = 0; i<3; i++ ){
        const roomcard = RoomCard();
        divCard.appendChild(roomcard);
    }

    divRoot.appendChild(divCard);

    const selector = DataSelector();
    divRoot.appendChild(selector);

    const footer = document.getElementById('footer');
    footer.innerHTML = '';
    
    const footers = Footer();
    footer.appendChild(footers);
}
