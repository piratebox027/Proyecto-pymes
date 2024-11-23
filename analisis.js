// Datos simulados para el análisis
const analysisData = {
    sales: {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      data: [5000, 7000, 4000, 8000, 9500, 6000],
    },
    products: {
      labels: ["Producto A", "Producto B", "Producto C", "Producto D"],
      data: [120, 150, 80, 60],
    },
    clients: {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      data: [15, 20, 10, 25, 30, 18],
    },
  };
  
  // Configuración de gráficas
  function createChart(ctx, type, data, label, backgroundColors, borderColors) {
    new Chart(ctx, {
      type: type,
      data: {
        labels: data.labels,
        datasets: [
          {
            label: label,
            data: data.data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
      },
    });
  }
  
  // Renderizar las gráficas
  window.onload = () => {
    // Ventas Mensuales
    const salesCtx = document.getElementById("salesChart").getContext("2d");
    createChart(
      salesCtx,
      "line",
      analysisData.sales,
      "Ventas Mensuales ($)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(54, 162, 235, 1)"
    );
  
    // Productos Más Vendidos
    const productsCtx = document.getElementById("productsChart").getContext("2d");
    createChart(
      productsCtx,
      "bar",
      analysisData.products,
      "Productos Más Vendidos",
      [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ]
    );
  
    // Clientes Registrados
    const clientsCtx = document.getElementById("clientsChart").getContext("2d");
    createChart(
      clientsCtx,
      "bar",
      analysisData.clients,
      "Clientes Registrados",
      "rgba(153, 102, 255, 0.2)",
      "rgba(153, 102, 255, 1)"
    );
  };
  