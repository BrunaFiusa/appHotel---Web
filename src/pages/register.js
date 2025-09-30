import LoginForm from "../components/LoginForm.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import {loginRequest} from "../api/clienteAPI.js";

export default function renderRegisterPage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    const formulario = LoginForm();

    const titulo = formulario.querySelector('h1');
    titulo.textContent = "Cadastre-se";

    const contentForm = formulario.querySelector('form');

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = "Digite seu nome";

    const inputCPF = document.createElement('input');
    inputCPF.type = 'text';
    inputCPF.placeholder = "Digite seu CPF";

    const inputTelefone = document.createElement('input');
    inputTelefone.type = 'text';
    inputTelefone.placeholder = "Digite seu telefone";

    /*Para adicionar input nome ao contentForm, preciso localizar onde está o input
    email, pois quero necessariuamente adicionar anteriormente a ele */
    const inputEmail = formulario.querySelector('input[type="email"]');
    const inputSenha = contentForm.querySelector('input[type="password"]');

    contentForm.insertBefore(inputNome, contentForm.children[0]);
    contentForm.insertBefore(inputCPF, contentForm.children[1]);
    contentForm.insertBefore(inputTelefone, contentForm.children[2]);

    //Criar o input para confirmar senha e adicionar em contentForm
    const confSenha = document.createElement('input');
    confSenha.type = 'password';
    confSenha.placeholder = "Confirme sua senha";

    /*Adicionar confSenha como "child" de Form que já contém 4 elementos: input nome[0],
    input email[1], input password[2], button btn[3], ao adicionar input confSenha 
    antes de btn[3] ele ocupará a posição [3] e button btn passará para [4] */
    contentForm.insertBefore(confSenha, contentForm.children[5]);

    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = "Criar conta!";

    contentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = inputNome.value.trim();
        const cpf = inputCPF.value.trim();
        const telefone = inputTelefone.value.trim();
        const email = inputEmail.value.trim();
        const senha = inputSenha.value.trim();

        try {
            const result = loginRequest(nome, cpf, telefone, email, senha)
        } catch {
            console.log("Erro inesperado!")
        }
    });

    const footer = document.getElementById('footer');
    footer.innerHTML = '';

    const footers = Footer();
    footer.appendChild(footers);
}

