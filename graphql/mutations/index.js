const { GraphQLObjectType } = require('graphql');
const { createPokemonMutation, deletePokemonMutation } = require('./pokemon.mutation')

const mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        createPokemon: createPokemonMutation,
        deletePokemon: deletePokemonMutation
    }
})

module.exports = {
    mutation
}