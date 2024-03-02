// Obtém o modo atual do localStorage ou define como 'light' se não existir
const currentMode = localStorage.getItem('mode') || 'light';
const html = document.documentElement;

// Aplica o modo atual ao carregar a página
html.classList.add(currentMode);

// Função para trocar o modo light/dark
function toggleMode() {
  // Inverte a classe light no elemento HTML
  html.classList.toggle("light");

  // Lista de ícones e seus caminhos para light mode
  const icons = {
    github: "./mobile/light-mode/GitHub.png",
    instagram: "./mobile/light-mode/Instagram.png",
    linkedin: "./mobile/light-mode/LinkedIn.png"
  };

  // Iterar sobre cada ícone e substituir a imagem conforme necessário
  for (const [iconId, iconPath] of Object.entries(icons)) {
    const img = document.querySelector(`#social-links a[href*="${iconId}"] img`);

    if (html.classList.contains("light")) {
      img.setAttribute("src", iconPath);
    } else {
      // Se não estiver no light mode, usar o caminho normal
      img.setAttribute("src", `./mobile/${iconId}.png`);
    }
  }

  // Atualiza o localStorage com o modo atual
  const updatedMode = html.classList.contains("light") ? 'light' : 'dark';
  localStorage.setItem('mode', updatedMode);
}

// Chama a função toggleMode() ao carregar a página
toggleMode();
