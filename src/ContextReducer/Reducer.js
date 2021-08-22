export const reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {

        const item = state.cart.findIndex((value) => value.id === action.item.id)

        if (item >= 0) {
            let newCart = [...state.cart, { ...action.item, qty: state.cart[item].qty + 1 }]
            newCart.splice(item, 1)

            return { ...state, cart: newCart }
        }
        else {
            return { ...state, cart: [...state.cart, action.item] }
        }

    } else if (action.type === "REMOVE_FROM_CART") {
        return { ...state, cart: state.cart.filter((value) => value.id !== action.id) }

    } else if (action.type === "INCREMENT") {
        return { ...state, cart: state.cart.filter((value) => value.id === action.item.id ? value.qty = value.qty + 1 : value.qty) }

    } else if (action.type === "DECREMENT") {
        if (action.item.qty > 1) {
            return { ...state, cart: state.cart.filter((value) => value.id === action.item.id ? value.qty = value.qty - 1 : value.qty) }
        }
        return state

    } else if (action.type === "ADD_TO_PREVIEW") {
        return { ...state, preview: action.item }

    } else if (action.type === "SET_USER") {
        return { ...state, user: action.user }

    } else if (action.type === "SEARCH_VALUE") {
        return { ...state, search: action.search_item }

    } else {
        return state;
    }
}
