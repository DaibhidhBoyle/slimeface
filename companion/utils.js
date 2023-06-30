export function timePrefrence (preference, hours){
  if (preference === "12h") {
    return hours % 12 || 12;
  } else {
    return zeroPad(hours);
  }
}

export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


export function dateSuffixCreator(date) {
  if (date > 3 && date < 21) return "th";
  switch (date % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function writtenMonth(targetMonth){
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  return month[targetMonth]
}
