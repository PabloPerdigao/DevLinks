
// Obtém o modo atual do localStorage ou define como light se não existir
const currentMode = localStorage.getItem('mode') || 'light';
const html = document.documentElement;

// Aplica o modo atual ao carregar a página
html.classList.add(currentMode);

// Lista de ícones e seus caminhos para light mode
const icons = {
  github: "./assets/light-mode/github.png",
  instagram: "./assets/light-mode/instagram.png",
  linkedin: "./assets/light-mode/linkedin.png"
};

// BG para light mode
const bgLightMode = "./assets/light-mode/bg-light-mode-gradient.png";

// BG para dark mode
const bgDarkMode = "./assets/dark-mode/bg-dark-mode-gradient.jpg";

// Função para trocar o modo light/dark
function toggleMode() {
  // Inverte a classe light no elemento HTML
  html.classList.toggle("light");

  // Verifica se o modo atual é light
  const isLightMode = html.classList.contains("light");

  // Define o caminho do background com base no modo atual
  const bgPath = isLightMode ? bgLightMode : bgDarkMode;
  // Aplica o background
  document.body.style.backgroundImage = `url(${bgPath})`;

  // Iterar sobre cada ícone e substituir a imagem conforme necessário
  for (const [iconId, iconPath] of Object.entries(icons)) {
    const img = document.querySelector(`#social-links a[href*="${iconId}"] img`);

    // Define o caminho da imagem com base no modo atual
    const iconSrc = isLightMode ? iconPath : `./assets/dark-mode/${iconId}.png`;
    // Aplica o caminho da imagem
    img.setAttribute("src", iconSrc);
  }

  // Atualiza o localStorage com o modo atual
  const updatedMode = isLightMode ? 'light' : 'dark';
  localStorage.setItem('mode', updatedMode);
}

// Chama a função toggleMode() ao carregar a página
toggleMode();
