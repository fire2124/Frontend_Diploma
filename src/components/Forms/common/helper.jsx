const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getTime = (day) => {
  return `${getDay(day.getDay())} -> ${day.getDate()}:${
    day.getMonth() + 1
  }:${day.getFullYear()}, ${day.getHours()}:${day.getMinutes()}`;
};
const getRandomColor = (value) => {
  let c1 = getRandomInt(256);
  let c2 = getRandomInt(256);
  let c3 = getRandomInt(256);
  return `rgba(${c1}, ${c2}, ${c3}, ${value})`;
};

const getDay = (value) => {
  switch (value) {
    case 1:
      return "Pondelok";
    case 2:
      return "Utorok";
    case 3:
      return "Streda";
    case 4:
      return "Štvrtok";
    case 5:
      return "Piatok";
    case 6:
      return "Sobota";
    case 0:
      return "Nedeľa";
    default:
      break;
  }
};

const functionData = (label, x, y, color, borderColor, borderWidth) => {
  const result = {
    labels: x,
    datasets: [
      {
        label: label,
        data: y,
        backgroundColor: color,
        borderColor: borderColor,
        borderWidth: borderWidth,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return { result, options };
};

export { getRandomInt, getTime, getDay, getRandomColor, functionData };
