import LoginForm from "../components/LoginForm.js";
import NavBar from "../components/Navbar.js";

export default function renderLoginPage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    divRoot.appendChild(container); 

    const formulario = LoginForm();
    
    container.appendChild(titulo);
    container.appendChild(formulario); 
}
