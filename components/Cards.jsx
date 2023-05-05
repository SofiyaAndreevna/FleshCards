const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

module.exports = function Cards({ title, card, parametr }) {
  return (
    <Layout title={title}>
      <div className="cardsList">
        <Card card={card} parametr={parametr}/>
      </div>
    </Layout>
  );
};
