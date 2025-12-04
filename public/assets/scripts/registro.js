// La función que maneja la lógica de inicio de sesión
function validarLogin(event) {
  // Previene el envío del formulario por defecto (evita la recarga)
  event.preventDefault();

  // Clave estática para la demo
  const CLAVE_SECRETA = "ok";
  const passwordInput = document.getElementById("password").value;
  const nombre_usuario = document.getElementById("nombre-usuario").value;

  // 2. Muestra el mensaje 
  
    alert("¡Registro exitoso! Bienvenido a Kyonai");
    // Redirige a tu página principal
    window.location.href = "../../index.html";
    return true;
}
