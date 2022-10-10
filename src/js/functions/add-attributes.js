const addAttributes = () => {
  const list = document?.querySelectorAll("[data-aos");
  list.forEach((item) => item.setAttribute("data-aos-once", "true"));
};

export default addAttributes;
