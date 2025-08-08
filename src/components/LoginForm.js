export default function LoginForm() {
    const formulario = document.createElement('form');
    
    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = "Digite seu e-mail";
    email.className = 'input';
    formulario.appendChild(email);

    const senha = document.createElement('input');
    senha.type = 'password'; 
    senha.placeholder = "Digite sua senha";
    senha.className = 'input';
    formulario.appendChild(senha);

    const btnAut = document.createElement('button');
    btnAut.type = 'submit';
    btnAut.textContent = "Entrar";
    btnAut.className = 'input';
    btnAut.className = 'btn btn-primary'

    formulario.appendChild(btnAut);

    return formulario;
}
