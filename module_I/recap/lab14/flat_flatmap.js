const matrix = [
  [1, 2, 3],
  [3, 4, 5],
  [6, 7, 8]
];

let newArray = [];
for (let row = 0; row < matrix.length; row++) {
  const array = matrix[row];
  for (let j = 0; j < array.length; j++) {
    newArray.push(array[j]);
  }
}

console.log(newArray);

const newArray1 = matrix.flat();
console.log(newArray1);

const matrix1 = [
  [1, 2, 3],
  [3, 4, 5, [1, 2]],
  [6, 7, 8]
];

const newArray2 = matrix1.flat(2);

console.log(newArray2);

const matrix3 = [
  [1, 2, 3],
  [3, 4, 5, [1, 2, [1, 23, 3, 4, 5, 6]]],
  [6, 7, 8]
];

const newArray3 = matrix3.flat(3);
console.log(newArray3);

const orders = [
  {
    customer_id: 123,
    customer_name: "Pepito",
    total: 160,
    delivered: true,
    items: ['rice', 'garlic', 'tomatoes']
  },
  {
    customer_id: 456,
    customer_name: "Daniel",
    total: 1220,
    delivered: false,
    items: ['rice', 'onion', 'tomatoes']
  },
  {
    customer_id: 789,
    customer_name: "Javier",
    total: 1820,
    delivered: true,
    items: ['rice', 'garlic', 'onion']
  },
  {
    customer_id: 901,
    customer_name: "Pedro",
    total: 2403,
    delivered: true,
    items: ['rice', 'garlic', 'onion', 'tomatoes']
  },
];

const firstItems = orders.map((order) => order.items);
console.log(firstItems);

const applyFlat = firstItems.flat();
console.log(applyFlat);

const applyFlatMap = orders.flatMap((order) => order.items);

console.log(applyFlatMap);

const googleCalendarAPI = {
  primaryCalendar: [
    {
      startDate: new Date(2024, 10, 2, 15),
      endDate: new Date(2024, 10, 2, 15, 30),
      title: "Item 1",
    },
    {
      startDate: new Date(2024, 1, 10, 17),
      endDate: new Date(2024, 1, 10, 18),
      title: "Item 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2024, 5, 3, 12),
      endDate: new Date(2024, 5, 3, 12, 30),
      title: "Item 3",
    },
    {
      startDate: new Date(2024, 7, 17, 9),
      endDate: new Date(2024, 7, 17, 10),
      title: "Item 4",
    },
  ],
};

const newArray4 = Object
  .values(googleCalendarAPI)
  .flatMap((item) => {
    return item.map(date => date.endDate);
  });
console.log(googleCalendarAPI);
console.log(newArray4);
