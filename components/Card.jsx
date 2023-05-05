const React = require('react');

module.exports = function Card({ card, parametr }) {
  return (
    <div className="myCard" data-id={card.id}>
      <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">
          Вопрос:
        </label>
        <div className="col-sm-10">
          <h6 className="jopa">{card.question}</h6>
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label hidden">
          {card.answer}
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" />
        </div>
      </div>
      <button className="btn btn-outline-info btnAnswer" type="submit">
        Ответить
      </button>
      <button
        className="btn btn-outline-info btnNext"
        data-id={card.titleId}
        data-parametr={parametr}
      >
        Далее
      </button>
    </div>
  );
};
