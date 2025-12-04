function MensajeConfirmacion(event) {
  // Validación
        const nombre = document.getElementById("nombre-usuario").value;
        const email = document.getElementById("email").value;
        
        if (!nombre || !email) {
            alert("Por favor, complete todos los campos");
            return;
        }
        else {  
            alert("¡Duda enviada! Te responderemos lo más pronto posible");
            return ;
        }
}
