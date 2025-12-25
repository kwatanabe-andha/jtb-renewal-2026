export default function toDateTimeFormat(dateText: string) {
  const [year, month, day] = dateText.split('-')
  return `${year}.${month}.${day}`
}