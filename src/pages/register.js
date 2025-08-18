import LoginForm from "../components/LoginForm.js";
import NavBar from "../components/Navbar.js";

export default function renderRegisterPage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    const formulario = LoginForm();

    const nome = document.createElement('input');
    nome.type = 'nome';
    nome.placeholder = "Digite seu nome";
    formulario.appendChild(nome);

    const confirmPass = document.createElement('input');
    confirmPass.type = 'password';
    confirmPass.placeholder = "confirme a senha";
    formulario.appendChild(confirmPass);

    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = "Criar conta!";
    
    container.appendChild(titulo);
    container.appendChild(nome);
    container.appendChild(confirmPass);
    container.appendChild(formulario);
}

