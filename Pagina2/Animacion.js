
  // Esto es opcional, pero puedes agregar una clase a todas las imágenes al cargar la página.
    window.addEventListener('load', function () {
    const images = document.querySelectorAll('.image-hover');
    images.forEach(function (image) {
        image.classList.add('hover-effect');
    });
});

