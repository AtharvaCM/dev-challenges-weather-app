export function getDate(dateStr: string) {
  const dateObj = new Date(dateStr);
  const [day, month, date] = dateObj.toDateString().split(" ");

  return `${day}, ${date} ${month}`;
}
