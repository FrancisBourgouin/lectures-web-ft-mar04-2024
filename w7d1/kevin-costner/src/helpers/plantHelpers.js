export const calculateDayDifference = (lastWatered) => {
  const pastDay = new Date(lastWatered);
  const todayDay = new Date();

  const diffInMs = todayDay.getTime() - pastDay.getTime();
  const diffInS = diffInMs / 1000;
  const diffInDays = diffInS / 86400;

  return diffInDays
};