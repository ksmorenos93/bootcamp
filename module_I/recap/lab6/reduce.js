const elements = [1, 3, 2, 2, 1, 10, 14];

const objectReduce = elements.reduce((obj, element) => {
  if (element < 5) {
    obj["1-4"] += 1;
  } else if (element < 9) {
    obj["5-8"] += 1;
  } else {
    obj[">9"] += 1;
  }
  
  return obj;
}, {
  "1-4": 0,
  "5-8": 0,
  ">9": 0
});

console.log(objectReduce);

const orders = [
  {
    customer_id: 123,
    customer_name: "Pepito",
    total: 1200,
    delivered: true,
  },
  {
    customer_id: 456,
    customer_name: "Daniel",
    total: 1200,
    delivered: false,
  },
  {
    customer_id: 789,
    customer_name: "Javier",
    total: 1800,
    delivered: true,
  },
  {
    customer_id: 901,
    customer_name: "Pedro",
    total: 1800,
    delivered: true,
  },
];


const totalValues = orders
  .map((item) => item.total)
  .reduce((obj, element) => {
    if (!obj[element]) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }
    
    return obj;
  }, {});

console.log(totalValues);