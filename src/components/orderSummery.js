import React, { Component, PropTypes } from 'react';

export default class OrderSummery extends Component {
    render() {
        return (
            <div>
                <div className="alert alert-info" role="alert">
                    <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your attention</a>, but it's not super important.
                    </div>
            </div>
        );
    }
}

