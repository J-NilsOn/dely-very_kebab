const form = document.querySelector("#order");
const btnAdress = document.querySelector("#adress");
const delBtnsCourier = document.querySelectorAll("#delOrder");
addDeleteListener(delBtnsCourier);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { components, pricePrimary, action, method } = e.target;
  console.log(components.value);
  const response = await fetch(action, {
    method,
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify({
      components: components.value,
      pricePrimary: pricePrimary.value,
    }),
  });

  const order = await response.json();
  const list = document.querySelector(".orderElement");
  const resp = await fetch("/template/card.hbs");
  const hbs = await resp.text();
  const template = Handlebars.compile(hbs);
  list.innerHTML += template(order);
  const currentBtn = document.getElementById(`delete ${order._id}`);
  currentBtn.addEventListener("click", () => {
    console.log("ok");
  });
  addDeleteListener(currentBtn);
});

// btdDelOrder.addEventListener("click", async (e) => {});
// btnAdress.addEventListener("click", () => {});
