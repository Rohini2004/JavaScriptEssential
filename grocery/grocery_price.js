function trackgrocery() {
  // Get values from the input fields
  const amount1 = parseFloat(document.getElementById('amount1').value) || 0;
  const amount2 = parseFloat(document.getElementById('amount2').value) || 0;
  const amount3 = parseFloat(document.getElementById('amount3').value) || 0;

  // Calculate total
  const total = amount1 + amount2 + amount3;

  // Display result
  document.getElementById('result').innerText = `Total Grocery Amount: git${total}`;
}
