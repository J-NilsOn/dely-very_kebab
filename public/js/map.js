ymaps.ready(init);
function init() {
  myMap = new ymaps.Map(
    "map",
    {
      center: [59.92, 30.35],
      zoom: 12,
      controls: ["zoomControl", "fullscreenControl", "geolocationControl"],
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
  {
    const form = document.querySelector("#addOrder");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let { text } = e.target;
      console.log(text);
      const getGeo = () => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(function (position) {
            const thisPosition = [
              position.coords.latitude,
              position.coords.longitude,
            ];
            resolve(thisPosition);
          });
        });
      };

      const thisPosition = await getGeo();

      myGeoObject = new ymaps.GeoObject(
        {
          geometry: {
            type: "Point",
            coordinates: thisPosition,
          },
          properties: {
            iconContent: text.value,
            hintContent: "sale 50%",
          },
        },
        {
          preset: "islands#blackStretchyIcon",
          draggable: false,
        }
      );

      myMap.geoObjects.add(myGeoObject);
    });
  }
}

// <form>
// <input class="input" name="text" placeholder="text">
// <button class="addOrder input">add order</button>
// </form>
