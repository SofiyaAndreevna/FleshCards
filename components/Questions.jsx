const React = require("react");
const Layout = require("./Layout");
const Card = require("./Card");

module.exports = function Questions({ title }) {
  return (
    <Layout title={title}>
      <div className="questionCards">
        <div class="text-bg-dark mb-3">
          <div class="card-body">
            <h5 class="card-title">Название темы</h5>
            <p class="card-text">
              Описание описание описание описание описание описание
            </p>
            <button className="btn btn-outline-info">Играть</button>
          </div>
        </div>
        <div class="text-bg-dark mb-3">
          <div class="card-body">
            <h5 class="card-title">Название темы</h5>
            <p class="card-text">
              Описание описание описание описание описание описание
            </p>
            <button className="btn btn-outline-info">Играть</button>
          </div>
        </div>
        <div class="text-bg-dark mb-3">
          <div class="card-body">
            <h5 class="card-title">Название темы</h5>
            <p class="card-text">
              Описание описание описание описание описание описание
            </p>
            <button className="btn btn-outline-info">Играть</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
