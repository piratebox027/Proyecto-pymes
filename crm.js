let clients = [];

function renderClients() {
  const clientList = document.getElementById("client-list");
  clientList.innerHTML = "";

  clients.forEach((client, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${client.name}</td>
      <td>${client.email}</td>
      <td>${client.phone}</td>
      <td>
        <button class="btn btn-primary btn-sm" onclick="editClient(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteClient(${index})">Eliminar</button>
      </td>
    `;

    clientList.appendChild(row);
  });
}

document.getElementById("crm-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("clientName").value.trim();
  const email = document.getElementById("clientEmail").value.trim();
  const phone = document.getElementById("clientPhone").value.trim();

  if (!name || !email || !phone) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const existingClientIndex = clients.findIndex((client) => client.email === email);
  if (existingClientIndex !== -1) {
    // Actualizar cliente existente
    clients[existingClientIndex] = { name, email, phone };
    alert("Cliente actualizado correctamente.");
  } else {
    // Agregar nuevo cliente
    clients.push({ name, email, phone });
    alert("Cliente añadido correctamente.");
  }

  renderClients();
  e.target.reset(); // Reiniciar el formulario
});

function editClient(index) {
  const client = clients[index];
  document.getElementById("clientName").value = client.name;
  document.getElementById("clientEmail").value = client.email;
  document.getElementById("clientPhone").value = client.phone;

  clients.splice(index, 1); // Eliminar el cliente de la lista para editarlo
}

function deleteClient(index) {
  if (confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
    clients.splice(index, 1);
    renderClients();
  }
}

function filterClients() {
  const query = document.getElementById("searchClient").value.toLowerCase();
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(query) ||
    client.email.toLowerCase().includes(query) ||
    client.phone.includes(query)
  );

  const clientList = document.getElementById("client-list");
  clientList.innerHTML = "";

  filteredClients.forEach((client, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${client.name}</td>
      <td>${client.email}</td>
      <td>${client.phone}</td>
      <td>
        <button class="btn btn-primary btn-sm" onclick="editClient(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteClient(${index})">Eliminar</button>
      </td>
    `;

    clientList.appendChild(row);
  });
}

renderClients();
