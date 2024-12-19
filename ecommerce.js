document.querySelector('.dropdown-btn').addEventListener('click', function() {
  const dropdownOptions = document.querySelector('.dropdown-options');
  dropdownOptions.style.display = dropdownOptions.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.dropdown-options li').forEach(function(option) {
  option.addEventListener('click', function() {
    document.querySelector('.dropdown-btn').textContent = option.textContent;
    document.querySelector('.dropdown-options').style.display = 'none';
  });
});

// Fecha o dropdown se clicar fora dele
window.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown')) {
    document.querySelector('.dropdown-options').style.display = 'none';
  }
});



// Função para copiar o e-mail
document.getElementById('copy-email').addEventListener('click', function() {
  // Seleciona o texto do e-mail
  const emailText = document.getElementById('payment-email').textContent;

  // Cria um campo temporário para copiar
  const tempInput = document.createElement('input');
  document.body.appendChild(tempInput);
  tempInput.value = emailText;
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Alerta que o e-mail foi copiado
  alert('E-mail copiado para a área de transferência!');
});
