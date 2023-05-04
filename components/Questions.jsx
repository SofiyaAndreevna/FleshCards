const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

module.exports = function Questions ({title}){
    return(
        <Layout title={title}>
            <div>Выберите тему:</div>
        </Layout>
    );
}