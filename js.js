document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".btn");
  const main = document.querySelector("main");

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove telas anteriores se quiser que só uma apareça
      const existingScreen = document.querySelector(".tela");
      if (existingScreen) {
        existingScreen.remove();
      }

      // Cria a nova tela
      const tela = document.createElement("section");
      tela.classList.add("tela");
      tela.innerHTML = `
        <div class="tela-content">
          <h2>${button.textContent}</h2>
          <p>Conteúdo da seção ${button.textContent.toLowerCase()} aqui...</p>
        </div>
      `;

      main.appendChild(tela);
    });
  });
});
