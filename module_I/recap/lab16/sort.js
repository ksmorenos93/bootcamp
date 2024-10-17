let months = ['January', 'February', 'March', 'April', 'May', 'June'];
months.sort();
console.log(months);
console.log('-----------'.repeat(10));

let numbers = [1, 11, 12, 13, 14, 5, 16, 17, 1, 19, 107777];

numbers.sort((a, b) => a - b);
console.log(numbers);
console.log('-----------'.repeat(10));

let orders = [
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

orders.sort((a, b) => a.total - b.total);
console.log(orders);
console.log('-----------'.repeat(10));