const technology = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "./assets/technology/image-spaceport-portrait.jpg",
      landscape: "./assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "./assets/technology/image-space-capsule-portrait.jpg",
      landscape: "./assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

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

const machine = document.getElementById("name");
const desc = document.getElementById("desc");
const techImg = document.getElementById("techImg");
const slides = document.querySelectorAll(".slide");

// Function to update image based on screen size
const updateImageSrc = (selectedSlide) => {
  const mdBreakpoint = window.matchMedia("(min-width: 768px)");
  console.log(mdBreakpoint.matches);
  if (mdBreakpoint.matches) {
    techImg.src = selectedSlide.images.portrait;
  } else {
    techImg.src = selectedSlide.images.landscape;
  }
};

let activeSlide = document.querySelector(".slide.active");
console.log(slides);

const handleSlideClick = (slide) => {
  const selectedSlide = technology[slide.id];
  machine.innerHTML = selectedSlide.name;
  desc.innerHTML = selectedSlide.description;

  if (activeSlide) {
    activeSlide.classList.remove("active");
  }

  slide.classList.add("active");

  activeSlide = slide;

  updateImageSrc(selectedSlide);
};

slides.forEach((slide) =>
  slide.addEventListener("click", () => handleSlideClick(slide))
);

document.addEventListener("DOMContentLoaded", () => {
  const selectedSlide = technology[0];
  machine.innerHTML = selectedSlide.name;
  desc.innerHTML = selectedSlide.description;
  updateImageSrc(selectedSlide);
});

window.addEventListener("resize", () => {
  const selectedSlide = technology.find(
    (item) => item.name === machine.innerHTML
  );
  if (selectedSlide) {
    updateImageSrc(selectedSlide);
  }
});
