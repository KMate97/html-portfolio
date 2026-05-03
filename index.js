
/* data base */
const texts = [
  "Web Developer",
  "Software Developer",
  "Web Designer",
  "Application Developer",
  "Script Writer"
];
/* valtozok */
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
/*fuggveny*/
function type() {
  currentText = texts[i];
/*iras vagy torles logika*/
  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").textContent = currentText.substring(0, j);

  let speed = isDeleting ? 80 : 120;

  if (!isDeleting && j === currentText.length) {
    speed = 1200;
    isDeleting = true;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
    if (i === texts.length) i = 0;
  }

  setTimeout(type, speed);
}

type();

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

console.log(menuIcon);

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});