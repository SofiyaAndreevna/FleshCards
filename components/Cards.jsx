const React = require("react");
const Layout = require("./Layout");

module.exports = function Card({ title, child }) {
  return (
    <Layout title={title}>
      <div>
        {child}
      </div>
    </Layout>
  );
};
