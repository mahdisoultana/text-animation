import "./style.css";

const tl = gsap.timeline({ defaults: { duration: 1.2, ease: "power3.out" } });

tl.fromTo(
  "#header",
  { opacity: 0, scale: 2 },
  { opacity: 1, scale: 1, duration: 1.5, borderRadius: "3rem" },
)
  .fromTo(
    ".w-header1",
    { opacity: 0.5, x: "100%" },
    { opacity: 1, x: "0%", duration: 0.5, ease: "back.out(1)" },
    "-=.3",
  )
  .fromTo(
    ".w-header3",
    { opacity: 0.5, x: "-100%" },
    { opacity: 1, x: "0%", duration: 0.5, ease: "back.out(1)" },
    "-=.3",
  )
  .fromTo(
    ".w-header2",
    { opacity: 0.5, y: "-100%" },
    { opacity: 1, y: "0%", duration: 0.5, ease: "back.out(1)" },
    "-=.3",
  )
  .fromTo(
    ".w-header6",
    { opacity: 0.5, x: "100%" },
    { opacity: 1, x: "0%", duration: 0.5, ease: "back.out(1)" },
    "-=.3",
  )
  .fromTo(
    ".w-header4",
    { opacity: 0.5, x: "-100%" },
    { opacity: 1, x: "0%", duration: 0.5, ease: "back.out(1)" },
    "-=.3",
  )
  .fromTo(
    ".w-header5",
    { opacity: 0.5, y: "-100%" },
    { opacity: 1, y: "0%", duration: 0.5, ease: "back.out(1)" },
    "-=.3",
  )
  .fromTo(
    "button",
    { opacity: 0, y: "-100%" },
    { opacity: 1, y: "0%", duration: 1.5, ease: "back.out(4)" },
    "-=.3",
  );

const logo = document.querySelector("nav h1");

const letters = [...logo.textContent];

logo.textContent = "";

for (const letter of letters) {
  logo.innerHTML += `<span class='inline-block letter text-3xl'>${letter}<span>`;
}

gsap.fromTo(
  ".letter",
  { y: "100%", opacity: 0 },
  {
    y: "0",
    opacity: 1,
    delay: 2.4,
    stagger: 0.1,
    duration: 0.8,
    ease: "back.out(4)",
  },
);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  tl.timeScale(2).reverse();
});
