let prepareItems = [
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

let cart = [];

/*
first step
const item = prepareItems.find(item => item.emoji === '🌭');

if (item) {
  cart.push(item);
}
console.log(prepareItems);
console.log('------'.repeat(10));
console.log(cart);*/

const itemIndex = prepareItems.findIndex(item => item.emoji === '🌭');

if (itemIndex !== -1) {
  cart.push(prepareItems[itemIndex]);
  prepareItems.splice(itemIndex, 1);
}

console.log(prepareItems);
console.log('------'.repeat(10));
console.log(cart);


let prepareItems1 = [
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

const updatePrepareItems = {
  emoji: '🍕',
  changes: {
    price: 28,
    quantity: 20
  }
};

const itemIndex1 = prepareItems1.findIndex(item => item.emoji === '🍕');

//first part
//prepareItems1[itemIndex1] = updatePrepareItems.changes;
prepareItems1[itemIndex1] = {
  ...prepareItems1[itemIndex1],
  ...updatePrepareItems.changes
};

console.log(prepareItems1);
console.log('------'.repeat(10));

