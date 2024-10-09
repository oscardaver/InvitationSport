// Selección de los botones de cada equipo
document.getElementById('btn-real').addEventListener('click', function() {
    // Redirigir a la página del Real Madrid
    window.location.href = 'real_madrid.html';
});

document.getElementById('btn-barca').addEventListener('click', function() {
    // Redirigir a la página del Barcelona
    window.location.href = 'barcelona.html';
});

// Animación hover para los logos de los equipos
document.getElementById('img-real').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.2)';
    this.style.transition = 'transform 0.5s ease';
});

document.getElementById('img-real').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

document.getElementById('img-barca').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.2)';
    this.style.transition = 'transform 0.5s ease';
});

document.getElementById('img-barca').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
