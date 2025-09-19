function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const result = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    result.innerText = "⚠️ Please enter a valid amount";
    return;
  }

  let rate = 1;

  // Fixed Example Rates
  if (from === "USD" && to === "INR") rate = 83;
  else if (from === "INR" && to === "USD") rate = 0.012;
  else if (from === "EUR" && to === "USD") rate = 1.1;
  else if (from === "USD" && to === "EUR") rate = 0.91;
  else if (from === "EUR" && to === "INR") rate = 90;
  else if (from === "INR" && to === "EUR") rate = 0.011;
  else rate = 1; // same currency

  const converted = amount * rate;
  result.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
