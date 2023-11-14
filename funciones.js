$(document).ready(function () {
  $("#sendMessage").click(function () {
    var message = $("#message").val();
    var recipientEmail = "gerson.salab02@gmail.com"; // Dirección de correo preestablecida
    sendEmail(recipientEmail, message);
  });

  function sendEmail(email, message) {
    var mailtoLink = `mailto:${email}?body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  }
});

/*NOTIFICACION*/
document.getElementById('iconoNotificaciones').addEventListener('click', function () {
  mostrarNotificacion();
});

function mostrarNotificacion() {
  // Obtener el contenedor de notificaciones
  const contenedorNotificaciones = document.getElementById('notificaciones');

  // Crear un elemento de notificación
  const notificacion = document.createElement('div');
  notificacion.className = 'notificacion';

  // Texto de la notificación
  const textoNotificacion = document.createElement('p');
  textoNotificacion.textContent = '¡Esta es una notificación!';
  notificacion.appendChild(textoNotificacion);

  // Botón de cierre
  const botonCerrar = document.createElement('button');
  botonCerrar.textContent = 'Cerrar';
  botonCerrar.addEventListener('click', function() {
      cerrarNotificacion(notificacion);
  });
  notificacion.appendChild(botonCerrar);

  // Limpiar el contenedor y añadir la notificación
  contenedorNotificaciones.innerHTML = '';
  contenedorNotificaciones.appendChild(notificacion);

  // Mostrar la notificación
  setTimeout(function() {
      notificacion.classList.add('visible');
  }, 50);

  // Ocultar la notificación después de unos segundos
  setTimeout(function() {
      cerrarNotificacion(notificacion);
  }, 3000); // 3000 milisegundos (3 segundos)
}

function cerrarNotificacion(notificacion) {
  // Ocultar la notificación
  notificacion.classList.remove('visible');

  // Eliminar la notificación después de la animación de cierre
  notificacion.addEventListener('transitionend', function() {
      notificacion.remove();
  });
}

