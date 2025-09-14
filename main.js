document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".social-links a");
  const frame = document.getElementById("frame");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const url = link.getAttribute("data-link");
      frame.src = url;
    });
  });
});