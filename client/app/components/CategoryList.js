/** @jsx React.DOM */
var React = require("react");

var CategoryList = React.createClass({
    propTypes: {
        categories: React.PropTypes.array.isRequired
    },

    render: function () {
        var details = this.props.categories.map(function (category, i) {
            return (
                <a className="btn btn-block btn-default btn-lg">
                    {category}
                </a>
            );
        });
        return (
            <div className="panel panel-default row">
                <div className="col-xs-3">
                    <a className="btn btn-block btn-default btn-lg">Home</a>
                    {details}
                </div>
            </div>
        );
    }
});

module.exports = CategoryList;
