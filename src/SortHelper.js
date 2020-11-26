export const sortByTitle = (data, sortOrder) => {
  let lowerCaseTitle = data.map((item, index) => {
    return { index: index, value: item.title.toLowerCase() };
  });

  lowerCaseTitle.sort((a, b) => {
    if (sortOrder) {
      return a.value.localeCompare(b.value);
    } else {
      return b.value.localeCompare(a.value);
    }
  });

  let result = lowerCaseTitle.map((item) => {
    return data[item.index];
  });

  return result;
};

export const sortByPlayers = (data, sortOrder) => {
  let maxNumber = data.map((item, index) => {
    let val = item.players.split("-").pop() || -1;
    return { index: index, value: val };
  });

  maxNumber.sort((a, b) => {
    if (sortOrder) {
      return a.value - b.value;
    } else {
      return b.value - a.value;
    }
  });

  let result = maxNumber.map((item) => {
    return data[item.index];
  });

  return result;
};

export const sortByCost = (data, sortOrder) => {
  let result = [...data];
  result.sort((a, b) => {
    if (sortOrder) {
      return a.cost - b.cost;
    } else {
      return b.cost - a.cost;
    }
  });

  return result;
};
