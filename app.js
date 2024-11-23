// script.js

// Seleccionar formularios
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Manejar el envío del formulario de inicio de sesión
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío del formulario
  alert('Redirigiendo al index.html...'); // Mensaje de confirmación
  window.location.href = 'index.html'; // Redirigir al archivo index.html
});

// Manejar el envío del formulario de registro
registerForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío del formulario
  alert('Registro exitoso. Redirigiendo al index.html...'); // Mensaje de confirmación
  window.location.href = 'index.html'; // Redirigir al archivo index.html
});

// Script compartido para manejar las funciones dinámicas
function addProduct() {
    const table = document.getElementById("inventory-table");
    if (table) {
      const row = table.insertRow();
      row.innerHTML = `
        <td>#</td>
        <td>Producto Nuevo</td>
        <td>10</td>
        <td>$100</td>
        <td><button class="btn btn-danger" onclick="removeRow(this)">Eliminar</button></td>
      `;
    }
  }
  
  function removeRow(button) {
    button.parentElement.parentElement.remove();
  }



