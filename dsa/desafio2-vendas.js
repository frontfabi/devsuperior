const vendas = {
  sales: [
    "8349,14/09/2024,899.9,ESPORTE",
    "4837,17/09/2024,530.0,VESTUARIO",
    "15281,21/09/2024,1253.99,ESPORTE",
    "15344,27/09/2024,1000.9,VESTUARIO",
    // "18317,04/10/2024,250.4,VESTUARIO",
    "18972,11/10/2024,385.5,JARDINAGEM",
    "8349,14/09/2024,899.9,ESPORTE",
    "4837,17/09/2024,530.0,VESTUARIO",
    "15281,21/09/2024,1253.99,ESPORTE",
    "15344,27/09/2024,1000.9,VESTUARIO",
    // "18317,04/10/2024,250.4,VESTUARIO",
    "18972,11/10/2024,385.5,JARDINAGEM",
    "8349,14/09/2024,899.9,ESPORTE",
    "4837,17/09/2024,530.0,VESTUARIO",
    "15281,21/09/2024,1253.99,ESPORTE",
    "15344,27/09/2024,1000.9,VESTUARIO",
    // "18317,04/10/2024,250.4,VESTUARIO",
    "18972,11/10/2024,385.5,JARDINAGEM",
    "8349,14/09/2024,899.9,ESPORTE",
    "4837,17/09/2024,530.0,VESTUARIO",
    "15281,21/09/2024,1253.99,ESPORTE",
    "15344,27/09/2024,1000.9,VESTUARIO",
    // "18317,04/10/2024,250.4,VESTUARIO",
    "18972,11/10/2024,385.5,JARDINAGEM",
    "8349,14/09/2024,899.9,ESPORTE",
    "4837,17/09/2024,530.0,VESTUARIO",
    "15281,21/09/2024,1253.99,ESPORTE",
    "15344,27/09/2024,1000.9,VESTUARIO",
    // "18317,04/10/2024,250.4,VESTUARIO",
    "18972,11/10/2024,385.5,JARDINAGEM",
    "8349,14/09/2024,899.9,ESPORTE",
    "4837,17/09/2024,530.0,VESTUARIO",
    "15281,21/09/2024,1253.99,ESPORTE",
    "15344,27/09/2024,1000.9,VESTUARIO",
    // "18317,04/10/2024,250.4,VESTUARIO",
    "18972,11/10/2024,385.5,JARDINAGEM",
    "8349,14/09/2024,899.9,ESPORTE",
    "4837,17/09/2024,530.0,VESTUARIO",
    "15281,21/09/2024,1253.99,ESPORTE",
    "15344,27/09/2024,1000.9,VESTUARIO",
    // "18317,04/10/2024,250.4,VESTUARIO",
    "18972,11/10/2024,385.5,JARDINAGEM",
    "8349,14/09/2024,899.9,ESPORTE",
    "4837,17/09/2024,530.0,VESTUARIO",
    "15281,21/09/2024,1253.99,ESPORTE",
    "15344,27/09/2024,1000.9,VESTUARIO",
    "18317,04/10/2024,250.4,VESTUARIO",
    "18972,11/10/2024,385.5,JARDINAGEM",
  ],
  department: "VESTUARIO",
};

function checkSalesList(sales, department, index = 0, count = 0, salesSum = 0) {
  if (index >= sales.length) {
    return [count, salesSum];
  }

  const [id, date, value, dept] = sales[index].split(",");

  if (dept === department) {
    return checkSalesList(
      sales,
      department,
      index + 1,
      count + 1,
      salesSum + Number(value)
    );
  } else {
    return checkSalesList(sales, department, index + 1, count, salesSum);
  }
}

function totalSales(sales, department) {
  const outputSales = checkSalesList(sales, department, 0, 0, 0);
  return `
    ${outputSales[0]} VENDAS
    TOTAL = $ ${outputSales[1].toFixed(2)}
  `;
}
console.log(totalSales(vendas.sales, vendas.department));
console.log(totalSales(vendas.sales));