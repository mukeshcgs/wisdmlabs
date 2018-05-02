import axios from 'axios';

export function fetchPizzas() {
    return {
        type: 'FETCH_PIZZA',
        payload: axios.get("../pizzas.json")
    }
}

export function addToCart(productId) {

    return (dispatch, getState) => {
        console.log(productId);
        console.log(getState().products.byId[productId]);
        //   if (getState().products.byId[productId].inventory > 0) {
        //     dispatch(addToCartUnsafe(productId))
        //   }
    }
}