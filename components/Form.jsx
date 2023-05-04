const React = require('react');

module.exports = function Form({ title }) {
  return (
    <main>
    <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
          <div id="emailHelp" className="form-text">Мы никому его не сообщим :-)</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Пароль</label>
          <input type="password" className="form-control" id="exampleInputPassword1" required/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
          <label className="form-check-label" for="exampleCheck1">Хочу получать рекламу на почту</label>
        </div>
        <button type="submit" className="btn btn-primary">Начнём!</button>
      </form>
</main>
  );
};
