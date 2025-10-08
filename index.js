// Efeito de digitação
const typedText = document.querySelector(".typed-text");
const textArray = ["Mateus Silva", "Desenvolvedor Front-End", "Especialista em Tráfego Pago", "Streamer da Twitch"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 60);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 500);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Efeito Scroll Reveal
const scrollElements = document.querySelectorAll(".scroll-reveal");
const elementInView = (el, offset = 120) => el.getBoundingClientRect().top <= (window.innerHeight - offset);
window.addEventListener("scroll", () => {
  scrollElements.forEach(el => {
    if (elementInView(el)) el.classList.add("scrolled");
    else el.classList.remove("scrolled");
  });
});

// Fundo neon dinâmico
const colors = ["#ff0000ff", "#ff0000ff", "#f50000ff", "#ff0000ff", "#ff0101ff"];
let i = 0;
setInterval(() => {
  document.body.style.background = `radial-gradient(circle at 20% 20%, ${colors[i]}, #000)`;
  i = (i + 1) % colors.length;
}, 4000);

// Botão voltar ao topo
const btn = document.createElement("button");
btn.textContent = "⬆";
btn.classList.add("back-to-top");
document.body.appendChild(btn);
btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) btn.classList.add("show");
  else btn.classList.remove("show");
});
