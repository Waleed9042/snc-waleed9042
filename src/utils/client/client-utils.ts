export const getFormattedTime = () => {
  const date = new Date();
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());
  return `${day}-${month}-${year} : ${hours}:${minutes}:${seconds}`;
};
const padZero = (num: number) => {
  return num < 10 ? "0" + num : num;
};
