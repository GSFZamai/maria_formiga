// Definição das variáveis
var gifFormiga = document.getElementById("gif_formiga");
var saudacao = document.getElementById("saudacao");
var frase = document.getElementById("frase");
var data = new Date();
var horas = data.getHours();

//Criação das funções
function manha() {
    saudacao.innerHTML = "Bom dia!";
    frase.innerHTML = "Nossas formiguinhas estão se preparando para começar o trabalho.";
    gifFormiga.setAttribute("src", "./assets/img/formiga_trabalhando1.gif");
}

function tarde() {
    saudacao.innerHTML = "Boa tarde!";
    frase.innerHTML = "Nossas formiguinhas já estão trabalhando para, em breve, trazermos novidades para vocês";
    gifFormiga.setAttribute("src", "./assets/img/formiga_trabalhando2.gif"); 
}

function noite() {
    saudacao.innerHTML = "Boa noite!";
    frase.innerHTML = "Nossas formiguinhas estão descançando para retornarem ao trabalho amanhã."
    gifFormiga.setAttribute("src", "");
}

//Teste condicional para definir período
if (horas > 6 && horas < 12) {
    manha();
 }else if (horas >= 12 && horas < 18) {
    tarde();
 } else {
     noite();
 }

