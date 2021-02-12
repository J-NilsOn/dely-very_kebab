function addDeleteListener(button) {
  if (button.length) {
    button.forEach((btn) => {
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
  }

  // else {
  //   button.addEventListener("click", async ({ target }) => {
  //     const { value } = target;
  //     const div = target.parentElement;

  //     const response = await fetch("/courier", {
  //       method: "DELETE",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({ id: value }),
  //     });
  //     const result = await response.json();
  //     if (result.success) {
  //       div.remove();
  //     } else {
  //       alert(result.message);
  //     }
  //   });
  // }
}
