function validateBRDomain(domain) {
  const regex = /\.br$/;
  return regex.test(domain);
}

console.log(validateBRDomain("example.com.br")); // Output: true
console.log(validateBRDomain("example.com"));    // Output: false
console.log(validateBRDomain("example.org.brs")); // Output: false