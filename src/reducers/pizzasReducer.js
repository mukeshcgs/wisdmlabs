//Initian state 
const initialState = {
    isLoading: false,
    isError: null,
    pizzas: []
}

//Reducr function
/**
 * This is pure function which will take two param state and action n return an obj depending on action type
 * @param {*} state 
 * @param {*} action 
 */
 function pizzasReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PIZZA_PENDING':
            return { ...state, isLoading: true };
        case 'FETCH_PIZZA_FULFILLED':
            return { ...state, isLoading: false, pizzas: action.payload.data.results };
        case 'FETCH_PIZZA_REJECTED':
            return { ...state, isLoading: false, isError: `${action.payload.message}` };
        default:
            return state
    }
}
export default pizzasReducer;

