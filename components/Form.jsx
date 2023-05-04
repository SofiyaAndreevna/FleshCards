const React = require('react');

module.exports = function Form({ title }) {
  return (
      <div>
        <form>
          <div>
            <input name="name" placeholder="Введи имя" />
          </div>
          <div>
            <input name="password" placeholder="Придумай пароль" />
          </div>
          <div>
            <button type="submit">Войти</button>
          </div>
        </form>
      </div>
  );
};
