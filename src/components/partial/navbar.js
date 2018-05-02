import React, { Component, PropTypes } from 'react';

export default class Navbar extends Component {
    render() {
        return (<nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">PIZZA!</a>
                </div>
            </div>
        </nav>);
    }
}
