const form = document.querySelector("#order");
const btnAdress = document.querySelector("#adress");
const btdDelOrder = document.querySelector("#delOrder");

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

  btdDelOrder.addEventListener("click", async (e) => {});

  const result = await response.json();
  // console.log(result);
  const p = document.createElement("p");
  p.innerText = `${result.number}, ${result.adress}, ${result.components}, ${result.pricePrimary}, ${result.priceDiscount}, ${result.statusBooked}, ${result.statusSold}`;
  const orderElement = document.querySelector(".orderElement");
  orderElement.append(p);
});

// btnAdress.addEventListener("click", () => {});
