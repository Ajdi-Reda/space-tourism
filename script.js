const open = document.getElementById("open");
const close = document.getElementById("close");

const menuList = document.getElementById("menuList");

open.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  close.classList.toggle("hidden");
  open.classList.toggle("hidden");
});

close.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  open.classList.toggle("hidden");
  close.classList.toggle("hidden");
  console.log("hello");
});
