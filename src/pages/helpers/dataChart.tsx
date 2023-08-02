const months = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

const daysOfWeek = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];

const beforeDayChart = (howManyDays: number) => {
  const date = new Date();

  date.setDate(date.getDate() - howManyDays);

  const dayWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${dayWeek}-${day}-${month}`;
};

export const labelsChart = Array.from({ length: 7 }, (_, index) =>
  beforeDayChart(index)
).reverse();

export const dataChart = [250, 245, 200, 400, 34, 399, 500];
