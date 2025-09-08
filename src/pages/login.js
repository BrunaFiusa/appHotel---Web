import { loginRequest, saveToken } from "../api/authAPI.js";
import LoginForm from "../components/LoginForm.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function renderLoginPage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    const formulario = LoginForm();
    const contentForm = formulario.querySelector('form');

    // Inputs e botão presentes no form
    const inputEmail = contentForm.querySelector('input[type="email"]');
    const inputSenha = contentForm.querySelector('input[type="password"]');
    const btn = contentForm.querySelector('button[type="submit"]');

    // Monitora o clipe no botão para adicionar um evento de submeter os dados do forms
    contentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = inputEmail.value.trim();
        const senha = inputSenha.value.trim();

        try {
            const result = await loginRequest(email, senha);
            console.log("login realizad com sucesso!");
            saveToken(result.token);
            // window.location.pathname = "MeuSite/home";
        }
        catch {
            console.log("erro inesperado!");
        }
    });

    const texto = document.createElement('p');
    texto.textContent = 'Não possui uma conta? ';
    texto.className = 'texto';

    const link = document.createElement('a');
    link.href = "cadastro";
    link.textContent = 'Cadastre-se!';

    texto.appendChild(link)
    contentForm.insertBefore(texto, contentForm.children[3]);

    const footer = document.getElementById('footer');
    footer.innerHTML = '';

    const footers = Footer();
    footer.appendChild(footers);
}
