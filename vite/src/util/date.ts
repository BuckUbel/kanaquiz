export function getPrettyDate(date?: Date, withTime: boolean = true): string {
  if (date === undefined) return "";

  const yearString = String(date.getFullYear());
  const month = date.getMonth() + 1;
  let monthString = String(month);
  if (month < 10) monthString = 0 + monthString;
  const day = date.getDate();
  let dayString = String(day);
  if (day < 10) dayString = 0 + dayString;

  if (withTime) {
    const hour = date.getHours();
    let hourString = String(hour);
    if (hour + 1 < 10) hourString = 0 + hourString;
    const minute = date.getMinutes();
    let minuteString = String(minute);
    if (minute < 10) minuteString = 0 + minuteString;
    return `${dayString}.${monthString}.${yearString} - ${hourString}:${minuteString}`;
  }

  return `${dayString}.${monthString}.${yearString}`;
}
