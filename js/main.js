document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnModoOscuro');
  const secciones = document.querySelectorAll('main .seccion');
  const links = document.querySelectorAll('.sidebar a');

  // MODO OSCURO
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('oscuro');
      const icono = btn.querySelector('i');
      btn.innerHTML = document.body.classList.contains('oscuro')
        ? '<i class="fas fa-sun"></i> Modo Claro'
        : '<i class="fas fa-moon"></i> Modo Oscuro';
    });
  }

  // OCULTAR TODAS LAS SECCIONES AL INICIO
  secciones.forEach(sec => {
    sec.style.display = 'none';
    sec.classList.remove('mostrar');
  });

  // MOSTRAR SOLO LA PRIMERA SECCIÓN
  if (secciones.length > 0) {
    secciones[0].style.display = 'block';
    secciones[0].classList.add('mostrar');
  }

  // NAVEGACIÓN ENTRE SECCIONES DESDE EL MENÚ
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const destino = link.getAttribute('href').substring(1);

      secciones.forEach(sec => {
        sec.style.display = 'none';
        sec.classList.remove('mostrar');
      });

      const objetivo = document.getElementById(destino);
      if (objetivo) {
        objetivo.style.display = 'block';
        objetivo.classList.add('mostrar');
        objetivo.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
