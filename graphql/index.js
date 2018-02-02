const graphql = require('graphql');
const { query } = require('./queries');
const { mutation } = require('./mutations/index');

const schema = new graphql.GraphQLSchema({
  query,
  mutation
});

module.exports = {
  schema,
};