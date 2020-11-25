export const sortByTitle = (data) => {
  let lowerCaseTitle = data.map((item, index) => {
    return { index: index, value: item.title.toLowerCase() };
  });

  lowerCaseTitle.sort((a, b) => {
    return a.value.localeCompare(b.value);
  });

  let result = lowerCaseTitle.map((item) => {
    return data[item.index];
  });

  return result;
};

export const sortByPlayers = (data) => {
  let maxNumber = data.map((item, index) => {
    let val = item.players.split("-").pop() || -1;
    return { index: index, value: val };
  });

  maxNumber.sort((a, b) => {
    return b.value - a.value;
  });

  let result = maxNumber.map((item) => {
    return data[item.index];
  });

  return result;
};

export const sortByCost = (data) => {
  let result = [...data];
  result.sort((a, b) => {
    return a.cost - b.cost;
  });

  return result;
};
