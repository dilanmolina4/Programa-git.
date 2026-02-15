function validarRegistro(event) {
    event.preventDefault(); // Evita enviar el formulario

    let nombre = document.getElementById("nombre").value.trim();
    let cc = document.getElementById("documento").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let pass = document.getElementById("contraseña").value.trim();

    let rolEmpleado = document.querySelector('input[value="empleado"]').checked;
    let rolUsuario = document.querySelector('input[value="usuario"]').checked;

    if (nombre === "" || cc === "" || correo === "" || pass === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    // Validar correo
    let expresionCorreo = /\S+@\S+\.\S+/;
    if (!expresionCorreo.test(correo)) {
        alert("Ingresa un correo válido.");
        return false;
    }

    // Validar contraseña
    if (pass.length < 4) {
        alert("La contraseña debe tener mínimo 4 caracteres.");
        return false;
    }

    // Validar rol
    if (!rolEmpleado && !rolUsuario) {
        alert("Debes seleccionar si eres Empleado o Usuario.");
        return false;
    }

    // Guardar datos 
    let usuario = {
        nombre: nombre,
        documento: cc,
        correo: correo,
        contraseña: pass,
        rol: rolEmpleado ? "Empleado" : "Usuario"
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Registro exitoso. ¡Bienvenido!");
    window.location.href = "Home.html";  
}
function validarCita(event) {
    event.preventDefault();

    let tipo = document.getElementById("tipo-de-cita").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;

    if (tipo === "Seleciona") {
        alert("Debes seleccionar el tipo de cita.");
        return false;
    }

    let hoy = new Date().toISOString().split("T")[0];
    if (fecha < hoy) {
        alert("No puedes seleccionar una fecha pasada.");
        return false;
    }

    if (hora === "") {
        alert("Debes seleccionar una hora disponible.");
        return false;
    }

    // Guardamos la cita
    let cita = {
        tipo: tipo,
        fecha: fecha,
        hora: hora
    };

    localStorage.setItem("cita-agendada", JSON.stringify(cita));

    alert("¡Cita agendada con éxito!");
    return true;
}

