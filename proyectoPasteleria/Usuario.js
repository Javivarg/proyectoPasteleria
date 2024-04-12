// Array para almacenar los usuarios creados
let usuarios = [];

// Función para crear un nuevo usuario
function crearUsuario() {
    // Obtener valores de los campos del formulario
    let nombre = document.getElementById('inputNombre').value;
    let apellidoPaterno = document.getElementById('inputApellidoPaterno').value;
    let apellidoMaterno = document.getElementById('inputApellidoMaterno').value;
    let correo = document.getElementById('inputEmailNuevo').value;
    let contraseña = document.getElementById('inputPasswordNuevo').value;
    let confirmarContraseña = document.getElementById('inputConfirmarPassword').value;

    // Verificar que las contraseñas coincidan
    if (contraseña !== confirmarContraseña) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Crear objeto de usuario
    let nuevoUsuario = {
        nombre: nombre,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        correo: correo,
        contraseña: contraseña
    };

    // Agregar usuario al array de usuarios
    usuarios.push(nuevoUsuario);

    // Limpiar campos del formulario
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputApellidoPaterno').value = '';
    document.getElementById('inputApellidoMaterno').value = '';
    document.getElementById('inputEmailNuevo').value = '';
    document.getElementById('inputPasswordNuevo').value = '';
    document.getElementById('inputConfirmarPassword').value = '';

    alert("Usuario creado exitosamente.");
}

// Función para iniciar sesión
function iniciarSesion() {
    // Obtener valores de los campos del formulario
    let correo = document.getElementById('inputEmail').value;
    let contraseña = document.getElementById('inputPassword').value;

    // Buscar el usuario en el array de usuarios
    let usuarioEncontrado = usuarios.find(usuario => usuario.correo === correo && usuario.contraseña === contraseña);

    // Verificar si se encontró el usuario
    if (usuarioEncontrado) {
        alert("Inicio de sesión exitoso.");
        // Redirigir al usuario a la página de inicio
        window.location.href = "index.html";
    } else {
        alert("Correo electrónico o contraseña incorrectos.");
    }
}

// Asociar las funciones a los botones
document.getElementById('btnCrearUsuario').addEventListener('click', crearUsuario);
document.getElementById('btnIniciarSesion').addEventListener('click', iniciarSesion);

