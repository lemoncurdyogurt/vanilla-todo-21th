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

//버튼 클릭 시, 할일 저장
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); //
  const input = document.querySelector("input");
  const text = input.value.trim(); //양 끝 공백 제거 후 text에 저장

  if (text !== "") {
    addToList(text);
    input.value = ""; //사용자 입력칸 빈칸 리셋
    input.focus(); //입력창에 포커스
  }
});

function addToList(text) {
  const list = document.querySelector("#list");
  let li = document.createElement("li");
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  li.append(checkBox); // 체크박스를 li 안에 추가
  li.append(text); // 텍스트도 li 안에 추가
  list.append(li); // 리스트에 li 추가
}

