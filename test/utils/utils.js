
const queryOne = `
query {
    pokemon(id:1) {
        name
        id
        order
        img 
    }
}
`
const queryAll = `
query {
    pokemons {
        name
        id
        order
        img 
    }
}
`
const newMutation = `
    mutation {
        createPokemon(name: \"Alexandre\", order: 25, img:\"teste.img.br\") {
            id
            name
            order
            img
        }
    }
`
const deleteMutation = `
    mutation {
        deletePokemon(id:1) {
            id
        }
    }
`

module.exports = {
    queryOne,
    queryAll,
    newMutation,
    deleteMutation
}