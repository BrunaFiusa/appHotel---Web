import FormsRoom from "../components/FormsRoom.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { addRoom } from "../api/quartosAPI.js";

export default function renderRoomPage() { 
    //NavBar
    const nav = document.getElementById('navbar');
    nav.innerHTML = ''; 
    const navbar = NavBar();
    nav.appendChild(navbar);

    // Form
    const formulario = FormsRoom();
    const contentForm = formulario.querySelector('form');
    formulario.appendChild(contentForm);

    contentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        try{ 
            const response = await addRoom(this);
            console.log("Resposta do servidor: " + response);
        } catch {
            console.log("Erro ao enviar requisição: " + error.message);
        }
    })

    //Footer
    const footer = document.getElementById('footer');
    footer.innerHTML = '';
    const footers = Footer();
    footer.appendChild(footers);
}