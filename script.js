const clock = document.querySelector(".clock");
const numbersContainer = document.createElement("div");
numbersContainer.className = "numbers-container";
clock.appendChild(numbersContainer);
const digits = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < 12; i++) {
  const number = document.createElement("span");
  number.className = "numbers";
  number.innerHTML = digits[i];
  number.style.top = `${50 - Math.cos((i - 3) * (Math.PI / 6)) * 145}px`;
  number.style.left = `${50 + Math.sin((i - 3) * (Math.PI / 6)) * 145}px`;
  numbersContainer.appendChild(number);
}

function run() {
  const dateObj = new Date();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");
  const secondDeg = seconds * 6 + 270;
  const minuteDeg = minutes * 6 + seconds * 0.1 + 270;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5 + 270;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(run, 1000);
