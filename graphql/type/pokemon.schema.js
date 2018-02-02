const graphql = require('graphql');

const pokemonType = new graphql.GraphQLObjectType({
    name: 'PokemonType',
    fields: {
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        order: { type: graphql.GraphQLInt },
        img: { type: graphql.GraphQLString }
    }
});

module.exports = {
    pokemonType
}