const date = new Date();

const renderCalender = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();
  
  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;
  
  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);
  
  //마지막 일 구하기(28, 30, 31)
  const PLDate = prevLast.getDate();
  //마지막 날짜의 요일 구하기
  const PLDay = prevLast.getDay();
  
  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();
  
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];
  
  // console.log(PLDate) //31
  // console.log(PLDay) //4 : 목요일
  
  if (PLDay !== 6) { //지난 달의 마지막 요일이 (6)토요일이 아닌 경우.
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i); 
    }
  }
  
  for(let i = 1; i< 7 -TLDay; i++){
    nextDates.push(i)
  }
  
  const dates = prevDates.concat(thisDates, nextDates)
  //console.log(dates) :(35)[27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  const firstDateIndex = dates.indexOf(1)
  //console.log(firstDateIndex) : 5(금)
  const lastDateIndex = dates.lastIndexOf(TLDate);
  //console.log(lastDateIndex) : 34
  
  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex  ? 'this' : 'other';
    dates[i] =`<div class="date"><span class=${condition}>${date}</span></div>`;
  })
  
  document.querySelector('.dates').innerHTML = dates.join('');
  
  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
}

renderCalender();

const prevMonth = () => {
  date.setMonth(date.getMonth() + 1 );
  renderCalender();
}

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
};

const goToday = () => {
  date = new Date();
  renderCalender();
};