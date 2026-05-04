/** Tạo hiệu ứng sticky khi cuộn trang cho thanh menu */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
