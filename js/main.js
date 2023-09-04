let menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  menu.classList.toggle(menu.dataset.state);
  document.querySelector(".landing .text").classList.toggle("padding");
});

// let menuList = Array.from(document.querySelectorAll("nav ul li"));
// menuList.forEach((el) => {
//   el.addEventListener("click", (ev) => {
//     menuList.forEach((el) => el.classList.remove("active"));
//     ev.currentTarget.classList.add("active");
//   });
// });

let year = document.querySelector("footer p span");
let dateNow = new Date();

year.innerHTML = dateNow.getFullYear();
