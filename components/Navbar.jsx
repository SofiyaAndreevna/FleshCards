const React = require("react");

module.exports = function Navbar() {
  return (
    <header className="header">
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">СОФА ЖОПА КВИЗ!</a>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-info">Войти</button>
            <button className="btn btn-outline-info">Вопросы</button>
          </form>
        </div>
      </nav>
    </header>
  );
};
