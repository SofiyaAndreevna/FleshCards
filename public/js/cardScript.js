const myCard = document.querySelector('.myCard');
const cardsList = document.querySelector('.cardsList');
console.log("hkjsghfd")
if (myCard) {
  myCard.addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.classList.contains('btnNext')) {
      console.log(1);
      const result = await fetch(
        `/questions/${e.target.dataset.id}/index/${e.target.dataset.parametr}`,
      );
      const data = await result.json();
      // myCard.remove();
      cardsList.insertAdjacentHTML('beforeend', data.doc);
    }
  });
}

// нужно проверить все put post особенно в routes

// if (Card) {
//   myCard.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     if (e.target.classList.contains('btnAnswer')) {
//       const result = await fetch(`/questions/card/${e.target.dataset.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await result.json();
//       Card.insertAdjacentHTML('beforeend', data.html);
//     }
//   });
// }
