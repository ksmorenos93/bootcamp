const { areIntervalsOverlapping } = require("date-fns");

const dates = [
  {
    title: "Trabajo",
    start: new Date(2024, 9, 1, 10),
    end: new Date(2024, 9, 1, 11),
  },
  {
    title: "Cita veterinario",
    start: new Date(2024, 7, 1, 15),
    end: new Date(2024, 7, 1, 15, 30),
  },
  {
    title: "Cenar con pepita",
    start: new Date(2024, 9, 10, 20),
    end: new Date(2024, 9, 10, 21),
  },
];

const isOverlap = newDate => {
  return dates.some(date => {
    return areIntervalsOverlapping(
      {start: date.start, end: date.end},
      {start: newDate.start, end: newDate.end},
    )
  });
};
const otherDate = {
  start: new Date(2024, 9, 1, 10),
  end: new Date(2024, 9, 1, 11)
};

console.log(isOverlap(otherDate));

console.log(areIntervalsOverlapping(
  {
      start: new Date(2024, 10, 1),
      end: new Date(2024, 12, 1),
    },
  {
    start: new Date(2024, 10, 1),
    end: new Date(2024, 12, 1) }
));
