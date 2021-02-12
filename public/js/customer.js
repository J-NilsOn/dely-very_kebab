const buyBtns = document.querySelectorAll(".buy");
const cancelBtns = document.querySelectorAll(".cancel");
const divOrdered = document.querySelector('.ordered');
const divNotOrdered = document.querySelector('.notOrdered');
// customerBttns(buyBtns);
// customerBttns(cancelBtns);


// function customerBttns(button) {
  // if (button.length) {
    buyBtns.forEach((btn) => {
      btn.addEventListener('click', async ({target}) => {
        const number = target;
        console.log('number', number);
        const parent = target.parentElement.parentElement;

        console.log('text', parent.children[0].text);

        const number = documentgetElementById('test')

        console.log(div.children);

        const response = await fetch('/customer', {
          method: 'POST',
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ number: `${Number(number)}` }),
        })
        
        const result = await response.json();
        
        if (result.success) {
          divOrdered.append(div);
          div.remove();
        } else {
          alert('Status isn\'t changed');
        }
      })
    }) 
  // }
// }

cancelBtns.forEach((btn) => {
  btn.addEventListener('click', async ({target}) => {
    const {value} = target;
    const div = target.parentElement;

    const response = await fetch('/customer', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: value }),
    })
    
    const result = await response.json();
    
    if (result.success) {
      divNotOrdered.append(div);
      div.remove();
    } else {
      alert(result.message);
    }
  })
}) 
