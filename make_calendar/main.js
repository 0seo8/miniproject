const today = new Date();

const setCalendarDate = (year, month) => {

}

const setFixDayCount = number => {
  let fixNum = '';

  if (number <= 10) {
    fixNum = "0" + (number - 1);
  } else {
    fixNum = number - 1 ;
  }
  return fixNum;
}

if(today.getMonth() + 1 <10 ) {
  setCalendarDate(today.getFullYear(), "0" + (today.getMonth() + 1));
} else {
  setCalendarDate(today.getFullYear(), "" + (today.getMonth() + 1));
}