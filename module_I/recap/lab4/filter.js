const words = ["Item", "Llave", "element", "Parking"];

let newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.push(element);
  }
}

const elements = words.filter(item => item.length >= 6);

const orders = [
  {
    customer_id: 123,
    customer_name: "Pepito",
    total: 160,
    delivered: true,
  },
  {
    customer_id: 456,
    customer_name: "Daniel",
    total: 1220,
    delivered: false,
  },
  {
    customer_id: 789,
    customer_name: "Javier",
    total: 1820,
    delivered: true,
  },
  {
    customer_id: 901,
    customer_name: "Pedro",
    total: 2403,
    delivered: true,
  },
];

const deliveredAndMoreThan = orders.filter(item => item.delivered && item.total > 260);

console.log("deliveredAndMoreThan", deliveredAndMoreThan);

const searchItem = (query) => {
  return orders.filter((item) => item.customer_name.includes(query));
};
console.log("searchItem", searchItem('Pep'));
console.log("searchItem", searchItem('a'));

