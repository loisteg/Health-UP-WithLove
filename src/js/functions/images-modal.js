export const imageModal = () => {
  const scroll = calcScroll();
  document
    .querySelector(".reviews-slider")
    .addEventListener("click", (event) => {
      if (!event || !event.target) return;
      event.preventDefault();
      let resultImage;
      document
        .querySelectorAll(".reviews-slider .slick-slide img")
        .forEach((image) => {
          if (image === event.target) {
            resultImage = image.getAttribute("src");
          }
        });

      if (!resultImage) return;

      const modal = document.createElement("div");
      document.body.style.marginRight = `${scroll}px`;
      modal.style.top = `${window.pageYOffset}px`;
      modal.classList.add("modal-image", "animated", "fadeIn");
      modal.innerHTML = `
        <div class="modal-image__wrapper">
          <div class="modal-image__close">X</div>
          <img src=${resultImage}>
        </div>
      `;
      document.body.style.overflow = "hidden";
      document.body.appendChild(modal);

      modal.addEventListener("click", (event) => {
        event.preventDefault();
        const closeButton = document.querySelector(".modal-image__close");
        if (
          event.target &&
          (event.target === closeButton || event.target === modal)
        ) {
          modal.classList.remove("animated", "fadeIn");
          modal.classList.add("animated", "fadeOut");
          document.body.style.overflow = "visible";
          document.body.style.marginRight = `0px`;
          setTimeout(() => {
            modal.remove();
          }, 300);
        }
      });
    });
};

const calcScroll = () => {
  let div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";

  document.body.appendChild(div);

  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
};
