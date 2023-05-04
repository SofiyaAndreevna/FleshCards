const React = require("react");
const Layout = require("./Layout");

module.exports = function Card({ title }) {
  return (
    <Layout title={title}>
      <div className="myCard">
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Вопрос:
          </label>
          <div className="col-sm-10">
            <h6 className="jopa">Тут будет вопрос</h6>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Ответ
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" />
          </div>
        </div>
        <button className="btn btn-outline-info" type="submit">
          Ответить
        </button>
        <button className="btn btn-outline-info hidden">Далее</button>
      </div>
    </Layout>
  );
};
