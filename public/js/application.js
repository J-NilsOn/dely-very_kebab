// const form = document.querySelector("form");

// const delBtnsCourier = document.querySelectorAll("#delOrder");
// const delBtnsCustomer = document.querySelectorAll("#delBuy");
// addDeleteListener(delBtnsCourier);
// addDeleteListener(delBtnsCustomer);

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const { name, age } = e.target;
//   const response = await fetch("/user", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       name: name.value,
//       age: age.value,
//     }),
//   });
//   const user = await response.json();
// const list = document.querySelector("#list");
// const resp = await fetch("/template/card.hbs");
// const hbs = await resp.text();
// const template = Handlebars.compile(hbs);
// list.innerHTML += template(user);
// const currentBtn = document.getElementById(`delete ${user._id}`);
// addDeleteListner(currentBtn);
// });
