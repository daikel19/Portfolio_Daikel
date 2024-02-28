document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.skill-bar');
  
    // Función para animar las barras de habilidades
    function animateSkillBars() {
      skillBars.forEach(skillBar => {
        const level = skillBar.dataset.level;
        skillBar.style.width = level; // Asigna el ancho de la barra según el nivel de habilidad
      });
    }
  
    // Ejecuta la función de animación cuando se carga la página
    animateSkillBars();
  });
  