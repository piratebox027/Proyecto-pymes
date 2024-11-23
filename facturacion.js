const billingForm = document.getElementById("billing-form");
const addProductBtn = document.getElementById("addProduct");
const invoiceTableBody = document.querySelector("#invoice-table tbody");
const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const totalEl = document.getElementById("total");

let products = [];

addProductBtn.addEventListener("click", () => {
  const productName = document.getElementById("productName").value;
  const productQuantity = parseInt(document.getElementById("productQuantity").value);
  const productPrice = parseFloat(document.getElementById("productPrice").value);

  if (!productName || productQuantity <= 0 || productPrice <= 0) {
    alert("Por favor, ingresa valores válidos.");
    return;
  }

  // Agregar producto a la lista
  products.push({ name: productName, quantity: productQuantity, price: productPrice });
  updateInvoiceTable();
});

billingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (products.length === 0) {
    alert("No hay productos en la factura.");
    return;
  }

  alert("Factura generada con éxito.");
  // Aquí puedes enviar los datos al backend si es necesario
});

function updateInvoiceTable() {
  invoiceTableBody.innerHTML = ""; // Limpiar tabla
  let subtotal = 0;

  products.forEach((product) => {
    const row = document.createElement("tr");
    const productSubtotal = product.quantity * product.price;
    subtotal += productSubtotal;

    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.quantity}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>$${productSubtotal.toFixed(2)}</td>
    `;
    invoiceTableBody.appendChild(row);
  });

  const tax = subtotal * 0.19;
  const total = subtotal + tax;

  subtotalEl.textContent = subtotal.toFixed(2);
  taxEl.textContent = tax.toFixed(2);
  totalEl.textContent = total.toFixed(2);
}
