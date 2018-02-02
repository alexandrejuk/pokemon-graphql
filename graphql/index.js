const graphql = require('graphql');
const { query } = require('./queries');

const schema = new graphql.GraphQLSchema({
  query,
});

module.exports = {
  schema,
};