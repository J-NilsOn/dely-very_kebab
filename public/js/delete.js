function addDeleteListener(butons) {
  if (butons.length) {
    delBtns.forEach((btn) => {
      btn.addEventListener("click", async ({ target }) => {
        const { value } = target;
        const div = target.parentElement;

        const response = await fetch("/courier", {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ id: value }),
        });
        const result = await response.json();
        if (result.success) {
          div.remove();
        } else {
          alert(result.message);
        }
      });
    });
  } else {
    butons.addEventListener("click", async ({ target }) => {
      const { value } = target;
      const li = target.parentElement;

      const response = await fetch("/user", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: value }),
      });
      const result = await response.json();
      if (result.success) {
        li.remove();
      } else {
        alert(result.message);
      }
    });
  }
}
