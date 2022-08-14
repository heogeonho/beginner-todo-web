const clock = document.getElementById("clock");
const today = document.getElementById("date");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}`;

  const month = String(date.getMonth() + 1);
  const day = String(date.getDate()).padStart(2, "0");
  today.innerText = `${month}월 ${day}일`;
}
getClock();
setInterval(getClock, 1000);
