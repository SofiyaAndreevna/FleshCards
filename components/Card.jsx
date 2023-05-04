const React = require('react');
const Layout = require('./Layout');

module.exports = function Card({ title }) {
  return (
    <Layout title={title}>
      <div>
        <div>Question</div>
        <div>Answer</div>
      </div>
    </Layout>
  );
};
