document.querySelectorAll(".planet").forEach(planet => {
  planet.addEventListener("click", e => {
    e.stopPropagation();

    const rect = planet.getBoundingClientRect();
    const x = rect.left + rect.width / 2 - window.innerWidth / 2;
    const y = rect.top + rect.height / 2 - window.innerHeight / 2;

    document.querySelector(".solar-system").style.transform =
      `translate(${-x}px, ${-y}px) scale(2) rotateX(65deg)`;

    setTimeout(() => {
      document.querySelector(".solar-system").style.transform =
        `rotateX(60deg) rotateZ(360deg) scale(1)`;
    }, 3000);
  });
});
