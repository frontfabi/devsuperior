function removingNotNumbers(CPF) {
  const regex = /\D/g;
  return CPF.replace(regex, '');
}

console.log(removingNotNumbers("123.456.789-00")); // Output: "12345678900"

console.log(removingNotNumbers("987.654.321-99")); // Output: "98765432199"
console.log(removingNotNumbers("987654321-99"));