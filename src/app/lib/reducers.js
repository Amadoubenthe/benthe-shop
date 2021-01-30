import { actions } from './actions';

// Definir etat iitial
const initialState = {
    items: []
}


export default function onlineStoreApp(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_TO_CART : return Object.assign({}, state, { items : [...state.items, action.payload]});
        case actions.UPDATE_CART : return Object.assign({}, state, {
            items: state.items.map(item => {
                return item.id === action.payload.item.id?
                Object.assign({}, item, {
                    quantity: action.payload.quantity
                }) : item;

            })
        })
        case actions.REMOVE_FROM_CART : return Object.assign({}, state, {
            items : state.items.filter(item => {
                return item.id != action.payload.id
            })
        })
        default: return state;
        
    }
}