document.querySelector(".login-container form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario por defecto

    // Obtener los valores de usuario y contraseña ingresados por el usuario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar si el nombre de usuario y la contraseña son válidos
    if (username === "profe" && password === "123") {
        // Si son válidos, redirigir al usuario al dashboard
        window.location.href = "dashboard_profe.html";
    } else {
        // Si no son válidos, mostrar un mensaje de error
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});