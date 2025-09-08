// Archivo: scripts.js

document.getElementById('toggleRules').addEventListener('click', function(){
  const box = document.getElementById('rulesBox');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('enviarOp').addEventListener('click', function(){
  alert('¡Gracias! (esto simula enviar la opinión)');
});
