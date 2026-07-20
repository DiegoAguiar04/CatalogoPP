const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const heroSlides = document.querySelectorAll(".hero-slide");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-tabs]").forEach((tabGroup) => {
  tabGroup.addEventListener("click", (event) => {
    const button = event.target.closest(".tab-button");

    if (!button || button.closest("[data-tabs]") !== tabGroup) {
      return;
    }

    const selectedPanelId = button.dataset.target;
    const panel = document.getElementById(selectedPanelId);

    if (!panel) {
      return;
    }

    tabGroup.querySelectorAll(".tab-button").forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });

    const parentPanel = panel.parentElement;

    parentPanel.querySelectorAll(":scope > .tab-panel").forEach((item) => {
      const isSelected = item === panel;
      item.classList.toggle("active", isSelected);
      item.hidden = !isSelected;
    });
  });
});

if (heroSlides.length > 1) {
  let activeSlide = 0;

  setInterval(() => {
    heroSlides[activeSlide].classList.remove("active");
    activeSlide = (activeSlide + 1) % heroSlides.length;
    heroSlides[activeSlide].classList.add("active");
  }, 5200);
}
