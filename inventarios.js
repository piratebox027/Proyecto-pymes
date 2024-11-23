let products = [
    { id: 1, name: "Producto A", quantity: 50, price: 10.0, date: "2024-11-18" },
    { id: 2, name: "Producto B", quantity: 30, price: 15.0, date: "2024-11-17" },
  ];
  
  function renderTable() {
    const table = document.getElementById("inventory-table");
    table.innerHTML = "";
  
    products.forEach((product) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>${product.date}</td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="editProduct(${product.id})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Eliminar</button>
        </td>
      `;
  
      table.appendChild(row);
    });
  }
  
  function showAddProductModal() {
    document.getElementById("productForm").reset();
    document.getElementById("productId").value = "";
    document.getElementById("productModalLabel").innerText = "Añadir Producto";
    const modal = new bootstrap.Modal(document.getElementById("productModal"));
    modal.show();
  }
  
  function saveProduct() {
    const id = document.getElementById("productId").value || Date.now();
    const name = document.getElementById("productName").value.trim();
    const quantity = parseInt(document.getElementById("productQuantity").value);
    const price = parseFloat(document.getElementById("productPrice").value);
  
    if (!name || quantity <= 0 || price <= 0) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }
  
    const existingIndex = products.findIndex((product) => product.id == id);
  
    if (existingIndex !== -1) {
      products[existingIndex] = { id, name, quantity, price, date: new Date().toISOString().split("T")[0] };
    } else {
      products.push({ id, name, quantity, price, date: new Date().toISOString().split("T")[0] });
    }
  
    renderTable();
    bootstrap.Modal.getInstance(document.getElementById("productModal")).hide();
    document.getElementById("productForm").reset();
  }
  
  function editProduct(id) {
    const product = products.find((p) => p.id == id);
    document.getElementById("productId").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("productQuantity").value = product.quantity;
    document.getElementById("productPrice").value = product.price;
  
    const modal = new bootstrap.Modal(document.getElementById("productModal"));
    modal.show();
  }
  
  function deleteProduct(id) {
    if (confirm("¿Seguro que quieres eliminar este producto?")) {
      products = products.filter((product) => product.id != id);
      renderTable();
    }
  }
  
  renderTable();
  