
if (parseInt(localStorage.getItem('submissions')) == null) {
  localStorage.setItem('submissions', "1");
}
else {
  localStorage.setItem(parseInt(localStorage.getItem('submissions')) + 1);
}

const counterMessage = document.createElement('p');
counterMessage.innerHTML = `You have submitted ${getItem('submissions')} reviews.`;
document.querySelector('body').appendChild(counterMessage);

