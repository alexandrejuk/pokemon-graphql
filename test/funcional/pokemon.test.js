const { app } = require('../../app');
const request = require('supertest');
const { pokemon } = require('../mocks/pokemon.mock')


describe('Test the root path', () => {
    it('It should response the GET method', async () => {
        const query = `
            query {
                pokemon(id:1) {
                    name
                    id
                    order
                    img 
                }
            }
        `
        const response = await request(app).get('/graphql').query({ query });
        expect(response.body.data.pokemon).toEqual(pokemon);
    });
})




