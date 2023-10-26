const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

function emailCheck(){
  var emailField = document.getElementById("email-field") 
  var emailError = document.getElementById("email-error")
  if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = "Please enter a valid email";
    emailError.style.color="red";
    return false;
  }
  emailError.innerHTML = "";
  return true;
}
