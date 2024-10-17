const elements = [1, 25, 2, 6, 67, 22];

let item = null;
for (let i = 1; i < elements.length; i++) {
  const element = elements[i];
  if (element === 25) {
    item = elements[i];
    break;
  }
}

console.log(item);

item = elements.find(item => item % 2 === 0);

console.log(item);

const food = [
  {
    name: "Cakes",
    price: 355,
    emoji: '🥞'
  },
  {
    name: "Pizza",
    price: 16,
    emoji: '🍕'
  },
  {
    name: "Hot dog",
    price: 32,
    emoji: '🌭'
  },
  {
    name: "Burger",
    price: 26,
    emoji: '🍔'
  },
];

const pizza = food.find(item => item.emoji === '🍕');

const pizzaIndex = food.findIndex(item => item.emoji === '🍕');

console.log(pizza);
console.log(pizzaIndex);