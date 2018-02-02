const graphql = require('graphql');
const { pokemonType } = require('../type/pokemon.schema');
const { pokemonsDb } = require('../../db/pokemonsDb');

const pokemonQuery = {
   type: pokemonType,
   args: {
       id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) }
   },
   resolve : (root, args) => {
    return pokemonsDb.find(pokemon => pokemon.id === args.id)
  }
}

const pokemonsQuery = {
  type: graphql.GraphQLList(pokemonType),
  resolve : (root, args) => {
   return pokemonsDb
 }
}

module.exports = {
  pokemonQuery,
  pokemonsQuery
}