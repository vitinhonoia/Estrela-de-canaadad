document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("section, .card").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
  });

  setTimeout(() => {
    document.querySelectorAll("section, .card").forEach(el => {
      el.style.transition = "all .8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, 100);
});
