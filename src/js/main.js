import "./_vendor";
import "./_functions";
import "./_components";

import $ from "jquery";

// POST
// $("#form").on("submit", function (e) {
//   e.preventDefault();

//   const TOKEN = "5369957968:AAHrLt-fNVbjC9J3B_whNH4lcVopmemnl58";
//   const CHAT_ID = "-1001576354120";
//   const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

//   const success = document.querySelector(".success"),
//     failure = document.querySelector(".failure");

//   let name = document?.querySelector("#input-name"),
//     phone = document?.querySelector("#input-phone");

//   const message = `
//   <b>ФИ: ${name.value}</b>
//   <b>Номер телефона: ${phone.value}</b>`;

//   // TODO: Вставить нужный url для отправки
//   const request = $.ajax(URI_API, {
//     type: "POST",
//     data: {
//       chat_id: CHAT_ID,
//       parse_mode: "html",
//       text: message,
//     },
//   });

//   // выполняется после *успешного выполнения запроса
//   request.done(function () {
//     setTimeout(() => {
//       success.classList.remove("success_active");
//     }, 3000);
//     success.classList.add("success_active");

//     name.value = "";
//     phone.value = "";
//   });
//   // выполняется после *провального выполнения запроса
//   request.fail(function (err) {
//     setTimeout(() => {
//       failure.classList.remove("failure_active");
//     }, 3000);
//     failure.classList.add("failure_active");

//     console.log(err.message);
//     name.value = "";
//     phone.value = "";
//   });
// });
