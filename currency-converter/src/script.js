function Converter() {
  let input = document.getElementById("valor");
  const real = Number(input.value);
  const realForDolar = real * 5.26;
  const result = document.getElementById("valorConvertido");
  result.innerHTML = `O valor ${real}R$ em dólar é ${realForDolar}US$`;
  return result.innerHTML;
}
