/** Tạo hiệu ứng sticky khi cuộn trang cho thanh menu */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

const menu = document.querySelector("#menu-icon");
const navMenu = document.querySelector(".navmenu");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navMenu.classList.toggle("open");
};
