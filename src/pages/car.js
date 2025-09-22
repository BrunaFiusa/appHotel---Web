import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function rederCarPage() {

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = NavBar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = ''; 

    const footer = document.getElementById('footer');
    footer.innerHTML = '';
    const footers = Footer();
    footer.appendChild(footers);
}