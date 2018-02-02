const { GraphQLObjectType } = require('graphql');
const { pokemonQuery, pokemonsQuery } = require('./pokemon.query');

const query = new GraphQLObjectType({
  name: 'query',
  description: 'This query return a pokemon and all pokemons',
  fields: {
    pokemon: pokemonQuery,
    pokemons: pokemonsQuery
  },
});

module.exports = {
  query,
};