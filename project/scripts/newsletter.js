if (localStorage.getItem("subscribed") == "subscribed") {
  document.querySelector('#newsletter-link h2').innerHTML = "You are signed up to our newsletter!";
  document.querySelector('#newsletter-link a').classList.add('subscribed');
}
