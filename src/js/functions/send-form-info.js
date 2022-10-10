import $ from "jquery";

$("#form").on("submit", function (e) {
  e.preventDefault();

  const TOKEN = "5696584906:AAG9euaRJkk8cUyTEwtGUmFm0B_S7h_Okpw";
  const CHAT_ID = "-1001835023595";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  //   const success = document.querySelector(".success"),
  //     failure = document.querySelector(".failure");

  let name = document?.querySelector('[name="name"]'),
    phone = document?.querySelector('[name="phone"]'),
    telegram = document?.querySelector('[name="telegram"]');

  const message = `
   <b>ФИ: ${name.value}</b>
  <b>Номер телефона: ${phone.value}</b>
  <b>Telegram: @${
    telegram.value[0] === "@" ? telegram.value.slice(1, -1) : telegram.value
  }</b>`;
  const request = $.ajax(URI_API, {
    type: "POST",
    data: {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    },
  });

  const setAttributes = (el, attrs) => {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  };

  // выполняется после *успешного выполнения запроса
  request.done(function () {
    const success = document.createElement("div");
    setTimeout(() => {
      success.style.opacity = 0;
      setTimeout(() => {
        success.remove();
      }, 300);
    }, 3000);
    success.classList.add("success-form-push");
    setAttributes(success, {
      "data-aos": "fade-in",
      "data-aos-once": "true",
    });
    success.innerHTML = "Інформація була відправлена!";
    document.body.appendChild(success);

    name.value = "";
    phone.value = "";
    telegram.value = "";
  });
  // выполняется после *провального выполнения запроса
  request.fail(function (err) {
    const failure = document.createElement("div");
    setTimeout(() => {
      failure.style.opacity = 0;
      setTimeout(() => {
        success.remove();
      }, 300);
    }, 3000);
    failure.classList.add("failure-form-push");
    setAttributes(failure, {
      "data-aos": "fade-in",
      "data-aos-once": "true",
    });
    failure.innerHTML = "Помилка!";
    document.body.appendChild(failure);

    name.value = "";
    phone.value = "";
    telegram.value = "";
  });
});
