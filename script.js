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

//페이지 로드 시에 로컬스토리지에서 가져오기
document.addEventListener("DOMContentLoaded", loadList);

//버튼 클릭 시, 할일 저장
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); //
  const input = document.querySelector("input");
  const text = input.value.trim(); //양 끝 공백 제거 후 text에 저장

  if (text !== "") {
    addToList(text, false);
    saveLocalStorage(text, false);
    input.value = ""; //사용자 입력칸 빈칸 리셋
    input.focus(); //입력창에 포커스
  } else {
    alert("할 일을 작성해주세요!");
  }
});

function addToList(text, checked) {
  const list = document.querySelector("#list");
  let li = document.createElement("li");
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = checked;

  let span = document.createElement("span");
  span.textContent = text;
  //체크 여부에 따라 스타일 변경
  if (checked) {
    span.style.textDecoration = "line-through";
  }

  checkBox.addEventListener("change", () => {
    doneList(text, checkBox.checked);

    span.style.textDecoration = checkBox.checked ? "line-through" : "none";

    getTodoCount();
    getDoneCount();
  });

  li.append(checkBox);
  li.append(span);
  list.append(li); // 리스트에 li 추가
}

//로컬스토리지에 저장
function saveLocalStorage(text, checked) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push({ text, checked });
  localStorage.setItem("todos", JSON.stringify(todos));
}

//로컬스토리지 데이터 가져오기
function loadList() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(({ text, checked }) => addToList(text, checked));
}

function doneList(text, checked) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.map((todo) =>
    todo.text === text ? { ...todo, checked: checked } : todo
  );

  localStorage.setItem("todos", JSON.stringify(todos));

  getDoneCount();
  getTodoCount();
}

function getTodoCount() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let todoCount = todos.filter((todo) => !todo.checked).length;

  document.querySelector("#todoCount").innerHTML = todoCount;
}

function getDoneCount() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let doneCount = todos.filter((todo) => todo.checked).length;

  if (doneCount === todos.length){
    alert("축하합니다! 모든 할 일을 다하셨어요!")
  }

  document.querySelector("#doneCount").innerHTML = doneCount;


}
