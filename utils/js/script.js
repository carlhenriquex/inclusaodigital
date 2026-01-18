// === MUDAR ESTILO DA HEADER COM O SCROLL DA PÁGINA ===
window.addEventListener("scroll", function () {

let header = document.querySelector("#header")
header.classList.toggle("rolagem", window.scrollY > 500)
})


// === MENU HAMBURGUER PARA TELAS MENORES ===
function menuShow() {
const menuMobile = document.querySelector(".mobile-menu");
menuMobile.classList.toggle("open");

if (menuMobile.classList.contains("open")) {
const menuItems = menuMobile.querySelectorAll(".item-mobile");
menuItems.forEach(item => {
item.addEventListener("click", () => {
    menuMobile.classList.remove("open");
} );
} );
}
}


// === CARROSSEL PARA CARDS DOS ARTIGOS ===
const container = document.querySelector('.artigos-relacionados-container');
const slides = Array.from(container.querySelectorAll(':scope > a'));
let current = 0;

function passoPorTela() {
  const slideW = slides[0].getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(container).gap) || 0;
  const total = slideW + gap;

  // quantos cards cabem “inteiros” no container (1 no celular, 2 no tablet, etc.)
  const visible = Math.max(1, Math.round(container.clientWidth / total));
  return visible;
}

function irPara(index) {
  current = Math.max(0, Math.min(index, slides.length - 1));
  slides[current].scrollIntoView({
    behavior: 'smooth',
    inline: 'start',
    block: 'nearest'
  });
}

// inicia no primeiro
window.addEventListener('load', () => {
  current = 0;
  container.scrollLeft = 0;
  slides[0].scrollIntoView({ behavior: 'auto', inline: 'start', block: 'nearest' });
});

document.querySelector('.artigos-nav .next')?.addEventListener('click', () => {
  irPara(current + passoPorTela());
});

document.querySelector('.artigos-nav .prev')?.addEventListener('click', () => {
  irPara(current - passoPorTela());
});


// === DROPBOX PARA OS CONTEUDOS GERADOS ===
document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.parentElement.classList.toggle('show');
    });
});
// fechar dropdown ao clicar fora
document.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown').forEach(drop => {
        if (!drop.contains(e.target)) {
            drop.classList.remove('show');
        }
    });
});


// === CARROSSEL DOS BOLSISTAS ===
const equipeFotos = document.querySelector(".equipe-fotos");
const fotos = document.querySelectorAll(".foto-container");
const setaEsquerda = document.querySelector(".seta.esquerda");
const setaDireita = document.querySelector(".seta.direita");

let indiceAtual = 3;
const total = fotos.length;

function atualizarCarrossel() {
  fotos.forEach(f => f.classList.remove("destaque"));
  fotos[indiceAtual].classList.add("destaque");

  const gap = parseFloat(getComputedStyle(equipeFotos).gap) || 0;

  // --- SOMA A LARGURA REAL DE TODAS AS IMAGENS ANTERIORES ---
  let larguraAntes = 0;
  for (let i = 0; i < indiceAtual; i++) {
    larguraAntes += fotos[i].offsetWidth + gap;
  }

  // LARGURA DA IMAGEM ATUAL
  const larguraAtual = fotos[indiceAtual].offsetWidth;

  // CALCULA O CENTRO DO CONTÊINER
  const centroContainer = equipeFotos.offsetWidth / 2;

  // CALCULA O DESLOCAMENTO FINAL
  const deslocamento = -(larguraAntes) + (centroContainer - larguraAtual / 2);

  equipeFotos.style.transform = `translateX(${deslocamento}px)`;
}

// Botões
setaEsquerda.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + total) % total;
  atualizarCarrossel();
});

setaDireita.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % total;
  atualizarCarrossel();
});

// Inicia
atualizarCarrossel();
window.addEventListener("resize", atualizarCarrossel);