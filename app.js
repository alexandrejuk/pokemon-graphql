const express = require('express');
const graphql = require('graphql').graphql;
const graphqlHTTP = require('express-graphql');

const { schema } = require('./graphql/index');

const app = express();

app.use('/graphql', graphqlHTTP({ schema, pretty: true, graphiql: true }));


module.exports = {
    app
}