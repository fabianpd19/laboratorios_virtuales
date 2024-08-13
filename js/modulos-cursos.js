document.addEventListener("DOMContentLoaded", function () {
  const moduleLinks = document.querySelectorAll(".link-js");

  // Muestra el módulo predeterminado al cargar la página
  const defaultModule = document.getElementById("inicio");
  defaultModule.style.display = "block";
  defaultModule.style.opacity = "1";

  moduleLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      // Oculta todos los módulos y detiene cualquier video
      document.querySelectorAll(".module").forEach((module) => {
        if (module.style.display !== "none") {
          stopAllVideos(module);
          module.style.display = "none";
          module.style.opacity = "0";
        }
      });

      // Verifica si el módulo ya se ha cargado
      let targetModule = document.getElementById(targetId);
      if (!targetModule) {
        // Carga el módulo si no existe
        fetch(`${targetId}.html`)
          .then((response) => response.text())
          .then((html) => {
            const div = document.createElement("div");
            div.id = targetId;
            div.className = "module";
            div.innerHTML = html;
            document.getElementById("modulos").appendChild(div);
            targetModule = div;
            showModule(targetModule);
          });
      } else {
        showModule(targetModule);
      }
    });
  });

  function showModule(module) {
    module.style.display = "block";
    setTimeout(function () {
      module.style.opacity = "1";
    }, 50);
  }

  function stopAllVideos(module) {
    const iframes = module.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      const src = iframe.src;
      iframe.src = ""; // Vacia el src para detener el video
      iframe.src = src; // Restablece el src para reiniciar el video si es necesario
    });
  }
});
