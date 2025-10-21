import FormsRoom from "../components/FormsRoom.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function renderRoomPage() { 
    //NavBar
    const nav = document.getElementById('navbar');
    nav.innerHTML = ''; 
    const navbar = NavBar();
    nav.appendChild(navbar);

    // Form
    const formulario = FormsRoom();
    const contentForm = formulario.querySelector('form');
    contentForm.appendChild(contentForm);

    //Footer
    const footer = document.getElementById('footer');
    footer.innerHTML = '';
    const footers = Footer();
    footer.appendChild(footers);
}