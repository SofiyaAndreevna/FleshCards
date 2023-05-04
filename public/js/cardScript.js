// добавить класс в карточку и айди!!!! при перетасовке в карточку
const myCard = document.querySelector('.myCard');
const Card = document.querySelector('.totalCard');
// submit на кнопку ответить и click на кнопку далее
//class btnNext
//class btnAnswer
// class myCard на саму форму
// class totalCard на весь див со страницей карточек
// data-id={card.id} присвоить карточке???
// в форме обязательно  в инпуте name='answer'
// экспортировать форму

// нужно проверить все put post особенно в routes

if (myCard) {
  myCard.addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.classList.contains('btnNext')) {
      const result = await fetch(`/questions/card/${e.target.dataset.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await result.json();
      Card.insertAdjacentHTML('beforeend', data.html);
    }
  });
}

if (Card) {
  Card.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (e.target.classList.contains('btnAnswer')) {
      //кнопка ответить должна становиться невидимой??
      // нужно чтобы на сабмит правильный ответ из базы появлялся и может не далать кнопку невидимой???
      // e.target.classList.toggle('hidden');

      const result = await fetch(`/questions/card/${e.target.dataset.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answer: answer.value,
        }),
      });
      const data = await result.json();

      //если валью в инпуте совпадает с
      //ответом из базы, то прибавляем 10 очков(хорошо было бы получать в ответе очки
      //пользователя и отсылать их в базу данных и менять их там по имени пользователя)

      if ((data.message === answer.value)) {
        // points += 10;
        const res = await fetch()
      }
    }
  });
}
