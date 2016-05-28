/** @jsx React.DOM */
var React = require("react");
var MainHeader = require('../components/mainHeader');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <div className="navbar navbar-inverse">
                    <a className="navbar-brand" href="#">SPORTS STORE</a>
                </div>
                {<this.props.activeRouteHandler />}
            </div>
        );
    }
});

module.exports = App;
