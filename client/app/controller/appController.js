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
                <div className="panel panel-default row">
                    <div className="col-xs-3">
                        Categories go here
                    </div>
                    <div className='col-xs-8'>
                        {<this.props.activeRouteHandler />}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = App;
