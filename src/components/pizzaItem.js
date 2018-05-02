import React from 'react';
import PropTypes from 'prop-types';

const PizzaItem = (props) => (
  <div className="col-md-3" key={props.pizza.id}>
    <div className="panel panel-default">
      <div className="panel-body text-center">
        <p><strong>{props.pizza.name}</strong></p>

        <img src={props.pizza.img} className="img-responsive" />
        <br/>
        <button type="button" className="btn btn-warning btn-block"
          onClick={props.onClick}>
          ORDER
        </button>
      </div>
    </div>
  </div>
)

PizzaItem.propTypes = {
  pizza: React.PropTypes.object.isRequired,
};

export default PizzaItem