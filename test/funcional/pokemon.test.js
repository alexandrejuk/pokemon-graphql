const { app } = require('../../app');
const request = require('supertest');
const { pokemon, createPokemonMock } = require('../mocks/pokemon.mock')
const { pokemonsDb } = require('../../db/pokemonsDb')
const { newMutation, queryAll, queryOne, deleteMutation } = require('../utils/utils')

describe('Test the root path', () => {

    it('It should response the GET method to one Pokemon', async () => {
        const response = await request(app).get('/graphql').query({ query: queryOne });
        expect(response.statusCode).toEqual(200);
        expect(response.body.data.pokemon).toEqual(pokemon);
    });

    it('It should response the GET method to All Pokemon', async () => {
        const response = await request(app).get('/graphql').query({ query: queryAll });
        expect(response.statusCode).toEqual(200);
        expect(response.body.data.pokemons).toEqual(pokemonsDb);
    });

    it('It should response the POST method to New Pokemon', async () => {
        const response = await request(app).post('/graphql').send( { query: newMutation } );
        expect(response.body.data.createPokemon).toEqual(createPokemonMock);
    });

    it('It should response the Delete method to New Pokemon', async () => {
        const response = await request(app).post('/graphql').send( { query: deleteMutation } );
        expect(response.body.data.deletePokemon.id).toEqual(1);
    });


})




