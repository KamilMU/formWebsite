const days = ['Вс','Пн','Вт','Ср','Чт','Пят','Суб'];

export function getDayName(dateValue) {
  const date = new Date(dateValue);

  return days[date.getDay()]
}