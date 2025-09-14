const fill = document.getElementById("fill");
const tip = document.getElementById("tip");

// Dicas aleatórias
const tips = [
  "Não deixe seus inimigos chegarem à sua torre!",
  "Lembre-se: o Elixir recarrega sozinho!",
  "Construa seu deck com equilíbrio.",
  "Duas coroas são melhores que uma!",
  "Espere o momento certo para soltar suas tropas!"
];

// Exibir dica aleatória
tip.textContent = tips[Math.floor(Math.random() * tips.length)];

// Simular carregamento
let progress = 0;
const interval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(interval);
    tip.textContent = "Pronto para a batalha!";
  } else {
    progress += 2;
    fill.style.width = progress + "%";
  }
}, 100);
