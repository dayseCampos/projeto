//Enviar formulario da Home
const mudarBtn = () => {
	const emailInput = document.getElementById('emailInput');
	const nomeInput = document.getElementById('nomeInput');
	const mensagemInput = document.getElementById('mensagemInput');
	const assuntoInput = document.getElementById('assuntoInput');
	const btn = document.getElementById('btnEnviado');
  
	if (emailInput.value !== '' && nomeInput.value !== '' && mensagemInput.value !== '' && assuntoInput.value !== '') {
	  btn.value = 'Enviado!';
	  btn.style.backgroundColor = '#b62025';
	}
  };

  //Menu base
//menu sticky
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

//menu responsivo
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

//Menu nav vertical (três tracinhos)
menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};
//Fechar nav vertical ao scrollar
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

//scroll base
//faz os elementos aparecerem de forma suave
const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

//inicia de baixo pra cima a forma suave
sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.sobre,.destaques,.materias,.contato,.receitas,.materias,.conteudo-materias',{delay:200, origin:'bottom'})