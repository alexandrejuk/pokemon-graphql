const graphql = require('graphql');
const { pokemonType } = require('../type/pokemon.schema');
const { pokemonsDb } = require('../../db/pokemonsDb');

const createPokemonMutation = {
    type: pokemonType,
    args: {
        id: { 
            type: graphql.GraphQLInt 
        },
        name: { 
            type: graphql.GraphQLNonNull(graphql.GraphQLString) 
        },
        order: { 
            type: graphql.GraphQLNonNull(graphql.GraphQLInt) 
        },
        img: { 
            type: graphql.GraphQLNonNull(graphql.GraphQLString) 
        },
    },
    resolve : (root, args) => {
        const id = pokemonsDb
            .reduce((prev, cur) => Math.max(prev, cur.id),0)+1;
        
        const pokemon = { id, name: args.name, order: args.order, img: args.img };
        const newPokemon = pokemonsDb.push(pokemon);
        return pokemon
   }
};

const deletePokemonMutation = {
    type: pokemonType, 
    args: {
        id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLInt) 
        }
    },
    resolve: (root, args) => {
        const deletePokemon = pokemonsDb.filter(pokemon => pokemon.id !== args.id);
        return args
    }
}

module.exports = {
    createPokemonMutation,
    deletePokemonMutation
};
