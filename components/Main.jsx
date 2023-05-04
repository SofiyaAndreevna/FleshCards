const React = require('react');
const Layout = require('./Layout');
const Form = require('./Form');

module.exports = function Main({title}) {
    return(
        <Layout title={title}>
            <Form/>
        </Layout>
    );
}