// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".Menu-vertical-videojuego-tipo1");

// Al hacer clic en el botón de hamburguesa
btn.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase "active" en el menú
  // Esto hace que se muestre o se oculte
  menu.classList.toggle("active");

  // (opcional) También puedes alternar una clase en el botón si quieres cambiar su apariencia
  // btn.classList.toggle("open");
});

// Funcion para mostrar el grupo creado
function MostrarNuevoGrupo(){
  window.location.href = "../assets/chat-nuevo-grupo.html";
}

// Funcion para el chat
// scripts/chat-mini.js
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input-mensaje');
    const btn = document.getElementById('btn-enviar');
    const chat = document.getElementById('mensajes-container');
    
    // Click en enviar
    btn.addEventListener('click', function() {
        const texto = input.value.trim();
        if (texto) {
            // Mensaje del usuario (derecha)
            agregarMensaje(texto, 'enviado');
            input.value = '';
            
            // Respuesta automática
            setTimeout(function() {
                agregarMensaje('¡Holaaaa! Cómo estas?', 'recibido');
            }, 1000);
        }
    });
    
    // Función para agregar mensaje
    function agregarMensaje(texto, tipo) {
        const h5 = chat.querySelector('h5');
            if (h5) {
              h5.remove(); // Elimina el h5
            }

        const div = document.createElement('div');
        div.className = `mensaje ${tipo}`;
        div.innerHTML = `<div>${texto}</div>`;
        chat.appendChild(div);
        chat.scrollTop = chat.scrollHeight;
    }
    
    // Enter también funciona
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') btn.click();
    });
});
