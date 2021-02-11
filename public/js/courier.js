const form = document.querySelector("#order");
const btnAdress = document.querySelector("#adress");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { components, pricePrimary } = e.target;
  const Order = new Order({
    courier: components,
    statusBooked: Boolean,
    statusSold: Boolean,
    adress: String,
    pricePrimary,
    priceDiscount: this.pricePrimary * 0.5,
  });
});

btnAdress.addEventListener("click", () => {});
