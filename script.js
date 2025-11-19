//
const loginBtn = document.getElementById('login-btn');
const passwordInput = document.getElementById('password');
const loginScreen = document.getElementById('login-screen');
const cardScreen = document.getElementById('card-screen');
const errorMsg = document.getElementById('error-msg');
//
loginBtn.addEventListener('click', () => {
  if (passwordInput.value === '1000-7') {
//
    loginScreen.remove();
    cardScreen.classList.remove('hidden');
    startCelebration();
  } else {
    errorMsg.textContent = 'incorrect password! >-<';
  }
});
//
document.getElementById('cake').addEventListener('click', (e) => {
  const wishes = document.getElementById('wishes');
  wishes.classList.remove('hidden'); // zawsze pokazuj



  const flash = document.createElement('div');
  flash.classList.add('flash');
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 800);
});
//
document.getElementById("cake").addEventListener("click", () => {
    const img = document.getElementById("cakeImg");
    img.src = "denji2.png";
});
//
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerHTML = "★";

    
    star.style.left = Math.random() * 100 + "vw";
    star.style.fontSize = (8 + Math.random() * 20) + "px";

 
    star.style.animationDuration = (3 + Math.random() * 5) + "s";

    document.querySelector(".stars-container").appendChild(star);

  
    setTimeout(() => {
        star.remove();
    }, 8000);
}
setInterval(createStar, 150);

