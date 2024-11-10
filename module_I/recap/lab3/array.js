const orders = [
  {
    customer_id: 123,
    customer_name: "Pepito",
    total: 609,
    delivered: true,
  },
  {
    customer_id: 456,
    customer_name: "Daniel",
    total: 12,
    delivered: false,
  },
  {
    customer_id: 789,
    customer_name: "Javier",
    total: 1809,
    delivered: true,
  },
  {
    customer_id: 901,
    customer_name: "Pedro",
    total: 2200,
    delivered: true,
  },
];

console.log("Orders", orders);
const elements = orders.map((item) => item.total);
console.log("elements", elements);

const elements3 = orders.map((item) => {
  return {
    ...item,
    tax: 11,
  };
});
console.log("elements3", elements3);
console.log("original", orders);
