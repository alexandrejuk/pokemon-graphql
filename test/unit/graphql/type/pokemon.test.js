const { pokemonType } = require('../../../../graphql/type/pokemon.schema')

describe('Test all types in schema of graphQL', () => {

    it('Check all fields of pokemonSchema', () => {
        expect(pokemonType.getFields()).toHaveProperty('id');
        expect(pokemonType.getFields()).toHaveProperty('name');
        expect(pokemonType.getFields()).toHaveProperty('order');
        expect(pokemonType.getFields()).toHaveProperty('img');
    });

})
