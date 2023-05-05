const React = require('react');
const Layout = require('./Layout');
// const Card = require('./Cards');

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
            <a href="/title/1/question/0">
              <button className="btn btn-outline-info">Играть</button>
            </a>
          </div>
        </div>
        <div class="text-bg-dark mb-3">
          <div class="card-body">
            <h5 class="card-title">Название темы</h5>
            <p class="card-text">
              Описание описание описание описание описание описание
            </p>
            <a href="/title/2/question/0">
              <button className="btn btn-outline-info">Играть</button>
            </a>
          </div>
        </div>
        <div class="text-bg-dark mb-3">
          <div class="card-body">
            <h5 class="card-title">Название темы</h5>
            <p class="card-text">
              Описание описание описание описание описание описание
            </p>
            <a href="/title/3/question/0">
              <button className="btn btn-outline-info">Играть</button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
