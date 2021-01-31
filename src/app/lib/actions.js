/*
* action types
*/

export const actions = {
    ADD_TO_CART : 'ADD_TO_CART',
    UPDATE_CART : 'UPDATE_CART ',
    REMOVE_FROM_CART : 'REMOVE_FROM_CART',
}


/*
* action creators
*/
const uid = () => Math.random().toString(34).slice(2)

// const uid = () => Math.floor(Math.random() * (max - min)) + min

// const uid = () => Math.floor(Math.random())


console.log(uid());
export function addToCart(item, quantity) {
    return {
        type: actions.ADD_TO_CART,
        payload: { id: uid(), quantity: quantity, details: item }
    }
}

export function updateCart(id, quantity) {
    return {
        type :actions.UPDATE_CART,
        payload: {id: id, quantity: quantity},
    }
}


export function removeFromCart(id) {
    return {
        type: actions.REMOVE_FROM_CART,
        payload: id
    }
}





