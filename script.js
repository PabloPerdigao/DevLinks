function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Lista de ícones e seus caminhos para light mode
  const icons = {
    github: "./mobile/light-mode/github.png",
    instagram: "./mobile/light-mode/instagram.png",
    linkedin: "./mobile/light-mode/linkedin.png"
  };

  // Iterar sobre cada ícone e substituir a imagem conforme necessário
  for (const [iconId, iconPath] of Object.entries(icons)) {
    const iconElement = document.querySelector(`#social-links a[href*="${iconId}"] img`);

    if (html.classList.contains("light")) {
      iconElement.src = iconPath;
    } else {
      // Se não estiver no light mode, usar o caminho normal
      iconElement.src = `./mobile/${iconId}.png`;
    }
  }
}
