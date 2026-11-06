// Formulário de contato: abre o WhatsApp com a mensagem já escrita.
const formulario = document.getElementById('formulario');
const campoMensagem = document.getElementById('mensagem');
const avisoErro = document.getElementById('erro');

const TELEFONE = '5511955502900'; // DDI 55 + DDD 11 + número

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const mensagem = campoMensagem.value.trim();

  // Não deixa abrir o WhatsApp com a mensagem vazia
  if (!mensagem) {
    avisoErro.hidden = false;
    campoMensagem.focus();
    return;
  }

  avisoErro.hidden = true;
  const url = `https://wa.me/${TELEFONE}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank', 'noopener');
});

// Some com o aviso de erro assim que a pessoa começa a digitar
campoMensagem.addEventListener('input', () => {
  avisoErro.hidden = true;
});