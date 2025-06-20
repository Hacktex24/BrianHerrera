document.addEventListener('DOMContentLoaded', function() {
  // Abre imagen en lightbox
  document.querySelectorAll('.galeria img').forEach(img => {
    img.onclick = function() {
      document.getElementById('img-lightbox').src = this.src;
      document.getElementById('lightbox').style.display = "flex";
    }
  });

  // Cierra lightbox al hacer clic en la X
  document.getElementById('cerrar-lightbox').onclick = function() {
    document.getElementById('lightbox').style.display = "none";
  };

  // Cierra lightbox al hacer clic fuera de la imagen
  document.getElementById('lightbox').onclick = function(e) {
    if (e.target === this) this.style.display = "none";
  };
  document.addEventListener('DOMContentLoaded', function() {
  // Abre imagen en lightbox
  document.querySelectorAll('.galeria img').forEach(img => {
    img.onclick = function() {
      document.getElementById('img-lightbox').src = this.src;
      // Toma el título desde el atributo data-title
      document.getElementById('lightbox-title').textContent = this.getAttribute('data-title') || '';
      document.getElementById('lightbox').style.display = "flex";
    }
  });

  // Cierra lightbox al hacer clic en la X
  document.getElementById('cerrar-lightbox').onclick = function() {
    document.getElementById('lightbox').style.display = "none";
  };

  // Cierra lightbox al hacer clic fuera de la imagen
  document.getElementById('lightbox').onclick = function(e) {
    if (e.target === this) this.style.display = "none";
  };
});

});
