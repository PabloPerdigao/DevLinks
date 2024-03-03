// Obtém o modo atual do localStorage ou define como 'dark' se não existir
const currentMode = localStorage.getItem('mode') || 'dark';
const html = document.documentElement;

// Aplica o modo atual ao carregar a página
html.classList.add(currentMode);

// Atualiza os ícones de acordo com o modo
updateIcons();

// Função para alternar entre os modos
function toggleMode() {
  html.classList.toggle("light");
  const newMode = html.classList.contains("light") ? "light" : "dark";
  
  // Salva o modo atual no localStorage
  localStorage.setItem('mode', newMode);

  // Atualiza os ícones após a alteração do modo
  updateIcons();
}

// Função para atualizar os ícones com base no modo
function updateIcons() {
  const icons = {
    github: "./mobile/GitHub.png",
    instagram: "./mobile/Instagram.png",
    linkedin: "./mobile/LinkedIn.png"
  };

  // Iterar sobre cada ícone e substituir a imagem conforme necessário
  for (const [iconId, iconPath] of Object.entries(icons)) {
    const img = document.querySelector(`#social-links a[href*="${iconId}"] img`);
    const modePath = `./mobile/${html.classList.contains("light") ? 'light-mode/' : ''}${iconId}.png`;
    img.setAttribute("src", modePath);
  }
}
