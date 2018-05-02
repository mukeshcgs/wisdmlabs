import React from 'react';

import PizzaItem from './pizzaItem'
import OrderSummery from './orderSummery'
import Navbar from './partial/navbar'

class Pizzas extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchPizzas();
        console.log(this.props);
    }
    render() {
        const { data, addToCart } = this.props;
        return (<div className="container">
            <br />
            <br />
            <br />
            <Navbar />
            <div className="row  mar-top">
                <div className="col-md-3">
                    <div className="panel panel-default">
                        <div className="panel-heading"> Order Summery</div>
                        <div className="panel-body">
                            <OrderSummery />
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {data.pizzas.map((pizza, i) => {
                            return <PizzaItem
                                key={i}
                                pizza={pizza}
                                onClick={addToCart(pizza.id)}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

export default Pizzas;