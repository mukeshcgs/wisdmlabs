import { connect } from 'react-redux';

import Pizzas from '../components/pizzas';
import {fetchPizzas, addToCart} from '../actions/pizzas';
// import fetchUsers from '../actions/user';

/**
 * we map our state to props by passing state as paramater and returning an object
 * adn passing to connect
 */
const mapStateToProps = (state) => {
    return {
        data: state
    }
}

/**
 * we map our dispatch to props by passing dispatch as paramater and returning an object
 * n it has name "fetchPizzas" is gonna be react prop
 * this is a funnction and it dispatch our fetch pizzas 
 * @param {*} dipatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPizzas: () => {
            dispatch(fetchPizzas())
        },
        addToCart:addToCart
    }
}

/**
 * Conatainer will provide state to our react component via props
 * React-redux gives u a component that takes u r redux store n passes to u r react component
 */
const PizzasContainer = connect(
    mapStateToProps,
    mapDispatchToProps
    //passing our react component "Pizzas"
)(Pizzas)

export default PizzasContainer;