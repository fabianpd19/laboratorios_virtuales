document.addEventListener("DOMContentLoaded", function () {
  const moduleLinks = document.querySelectorAll(".link-js");
  const modules = document.querySelectorAll(".module");

  // Muestra el módulo predeterminado al cargar la página
  const defaultModule = document.getElementById("inicio");
  defaultModule.style.display = "block";
  defaultModule.style.opacity = "1";

  moduleLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      // Oculta todos los módulos excepto el objetivo
      modules.forEach(function (module) {
        if (module.id !== targetId) {
          module.style.opacity = "0"; // Oculta el módulo
          module.style.display = "none"; // Oculta el módulo
        }
      });

      // Muestra el módulo objetivo con animación
      const targetModule = document.getElementById(targetId);
      targetModule.style.display = "block"; // Muestra el módulo objetivo

      // Espera un corto período antes de aplicar la clase de animación
      setTimeout(function () {
        targetModule.style.opacity = "1"; // Aplica la animación de desvanecimiento
      }, 50); // Ajusta el tiempo según sea necesario
    });
  });
});
