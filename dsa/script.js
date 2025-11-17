class Produto {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  // adicionando 2 funcoes pra lidar com produto

  // Função que retorna o valor total do produto
  getTotal() {
    return this.price * this.quantity;
  }

  // Função que recebe um produto, uma porcentagem e atualiza o preço baseado nessa porcentagem
  updatePrice(percentage) {
    this.price = this.price * (1 + percentage / 100);
  }
}

// sem OO
function total(produto) {
  return produto.price * produto.quantity;
}

function updatePrice(produto, percentage) {
  produto.price = produto.price * (1 + percentage / 100);
}

const p1 = new Produto("Notebook", 1000, 10);
const p2 = new Produto("Celular", 1500, 20);
const p3 = new Produto("Tablet", 1000, 15);

const produtos = [p1, p2, p3];

console.log(`Total de p1 : ${total(p1)}`);
updatePrice(p1, 10);
console.log(`Total de p1 : ${total(p1)}`);


console.log(`Total de p2 : ${p2.getTotal()}`);
p2.updatePrice(10);
console.log(`Total de p2 : ${p2.getTotal()}`);


produtos.forEach((produto) => {
  console.log(
    `Produto: ${produto.name}, Preço: R$${produto.price}, Quantidade: ${produto.quantity}`
  );
});

/////
