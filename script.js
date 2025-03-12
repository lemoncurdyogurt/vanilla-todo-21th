//현재 날짜와 시간을 가져오기
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
//요일 구하기
function getWeekDay() {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const weekDay = week[currentDate.getDay()];
  return weekDay;
}
const weekDay = getWeekDay(); //요일 함수 선언
const yyyy_mm_dd = `${year}년 ${month}월 ${day}일 ${weekDay}요일`;
//오늘의 날짜 띄우기
document.getElementById("todayDate").textContent = yyyy_mm_dd;
console.log(yyyy_mm_dd);

