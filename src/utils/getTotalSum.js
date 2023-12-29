export const getTotalSum = (arr) => {
  return arr.reduce((acc, item) => acc + Number(item.value), 0);
};
