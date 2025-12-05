
let counterNum = localStorage.getItem('submissions');
counterNum = parseInt(counterNum);

if (counterNum > 0) {
  counterNum++
  localStorage.setItem('submissions', counterNum)
}
else {
  localStorage.setItem('submissions', "1")
  counterNum = 1;
}

let counterMessage = document.createElement('p');
counterMessage.innerHTML = `You have submitted ${counterNum} reviews.`;
document.querySelector("main").appendChild(counterMessage);


