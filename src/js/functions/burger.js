import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

(function () {
  const burger = document?.querySelector("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");

  burger?.addEventListener("click", (e) => {
    burger?.classList.toggle("header__burger--active");
    menu?.classList.toggle("menu--active");

    if (menu?.classList.contains("menu--active")) {
      // menu.classList.add("animated", "fadeIn");
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");
      disableScroll();
    } else {
      // menu.classList.remove("animated", "fadeIn");
      // menu.classList.add("animated", "fadeOut");
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      enableScroll();
    }
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      // menu.classList.remove("animated", "fadeIn");
      // menu.classList.add("animated", "fadeOut");
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("header__burger--active");
      enableScroll();
    });
  });
})();
