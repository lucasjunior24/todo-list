import { combineReducers } from 'redux'

const rootReduceer = combineReducers({
    todo: () => ({
        description: 'Ler Livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura',
            done: true
        }, {
            _id: 2,
            description: 'Fazer reuniao',
            done: false
        }, {
            _id: 3,
            description: 'Realizar consulta',
            done: false
        }]
    })
})


export default rootReduceer