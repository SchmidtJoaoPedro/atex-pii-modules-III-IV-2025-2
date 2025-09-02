let passWord = '', generatedPassword = '', randomizator = '';
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-'          //constante de caracteres
let tamanho, newTamanho;

function passwordGenerator(tamanho) {                                                                  //função para gerar a senha conforme o parâmetro 'tamanho'
    generatedPassword = '';

    tamanho = Math.floor(Math.random() * 16) + 1;
    if (tamanho < 6 ||  tamanho == 6) {
        newTamanho = Math.floor(Math.random() * 6) + 1;
        tamanho = tamanho + newTamanho;
    }
    for (let i=0; i<tamanho;i++) {                                                                 //laço de repetição que percorre toda a variável caracteresUsados
        randomizator = Math.floor(Math.random()*characters.length);               //randomizador que escolhe uma posição aleatória e determina se vai ser usada ou não
        generatedPassword = generatedPassword + characters[randomizator];                                 //atribuição da posição usada para dentro da variável
    }
    document.getElementById('password').value = generatedPassword;
}

function togglePassword() {
  const pwdInput   = document.getElementById('password');
  const toggleBtn  = document.getElementById('toggle');
  const toggleIcon = document.getElementById('toggle-icon');

  // Paths relativos aos seus SVGs
  const ICONS = {
    open:  'assets/icons/eye.svg',
    closed: 'assets/icons/blind.svg'
  };

  toggleBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // alterna tipo de input
    const isPwd = pwdInput.type === 'password';
    pwdInput.type = isPwd ? 'text' : 'password';

    // atualiza src do <img> e aria-label
    toggleIcon.src = isPwd ? ICONS.open : ICONS.closed;
    toggleBtn.setAttribute(
      'aria-label',
      isPwd ? 'Ocultar senha' : 'Mostrar senha'
    );
  });
}