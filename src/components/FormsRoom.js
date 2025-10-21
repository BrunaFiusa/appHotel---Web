export default function FormsRoom() {
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.display = 'flex';
    divRoot.style.flexDirection = 'column';
    divRoot.style.alignItems = 'center';
    divRoot.style.justifyContent = 'center';
    divRoot.style.height = '100vh';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '500px';
    divRoot.appendChild(container);

    const titulo = document.createElement('h2');
    titulo.textContent = 'Cadastrar Quarto';
    titulo.className = 'text-center mb-4';
    container.appendChild(titulo);

    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column gap-3';
    container.appendChild(formulario);

    // Nome do quarto
    const nome = document.createElement('input');
    nome.type = 'text';
    nome.placeholder = 'Digite o nome do quarto';
    nome.className = 'form-control';
    formulario.appendChild(nome);

    // Número do quarto
    const numero = document.createElement('input');
    numero.type = 'number';
    numero.placeholder = 'Digite o número do quarto';
    numero.className = 'form-control';
    formulario.appendChild(numero);

    // Quantidade de camas de casal
    const camasCasal = document.createElement('input');
    camasCasal.type = 'number';
    camasCasal.placeholder = 'Digite a quantidade de cama(s) de casal do quarto';
    camasCasal.className = 'form-control';
    formulario.appendChild(camasCasal);

    // Quantidade de camas de solteiro
    const camasSolteiro = document.createElement('input');
    camasSolteiro.type = 'number';
    camasSolteiro.placeholder = 'Digite a quantidade de cama(s) de solteiro';
    camasSolteiro.className = 'form-control';
    formulario.appendChild(camasSolteiro);

    // Preço do quarto
    const preco = document.createElement('input');
    preco.type = 'number';
    preco.placeholder = 'Digite o preço do quarto';
    preco.className = 'form-control';
    formulario.appendChild(preco);

    // Imagem do quarto
    const divImagem = document.createElement('div');
    divImagem.className = 'mb-3';
    formulario.appendChild(divImagem);

    const labelImagem = document.createElement('label');
    labelImagem.setAttribute('for', 'formFileMultiple');
    labelImagem.className = 'form-label';
    labelImagem.textContent = 'Imagens do quarto';
    divImagem.appendChild(labelImagem);

    const imagem = document.createElement('input');
    imagem.className = 'form-control';
    imagem.type = 'file';
    imagem.id = 'formFileMultiple';
    imagem.multiple = true; // ✅ permite vários arquivos
    divImagem.appendChild(imagem);

    // Disponibilidade
    const labelDisponivel = document.createElement('label');
    labelDisponivel.textContent = 'O quarto está disponível?';
    formulario.appendChild(labelDisponivel);

    const disponivel = document.createElement('input');
    disponivel.type = 'checkbox';
    disponivel.className = 'form-check-input';
    formulario.appendChild(disponivel);

    // Botão
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = 'Cadastrar Quarto';
    btn.className = 'btn btn-danger mt-3';
    formulario.appendChild(btn);

    return divRoot;
}
