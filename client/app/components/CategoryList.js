/** @jsx React.DOM */
var React = require("react");

var CategoryList = function (props) {
    var details = props.categories.map(function (category, i) {
        return (
            <a className="btn btn-block btn-default btn-lg" onclick={props.onClick}>
                {category}
            </a>
        );
    });
    return (
        <div className="col-xs-3">
            <a className="btn btn-block btn-default btn-lg">Home</a>
            {details}
        </div>
    );
};

module.exports = CategoryList;
