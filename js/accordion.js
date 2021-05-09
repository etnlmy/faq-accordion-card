document.querySelectorAll(".accordion__item").forEach((item) => {
  const button = item.querySelector("button");
  button.addEventListener("click", () => {
    item.classList.toggle("accordion__item--active");
  });
});
