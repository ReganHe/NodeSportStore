
var React = require("react");

var CategoryList = React.createClass({
    onClick: function (event) {
        var categoryId = event.target.childNodes[0].data;
        this.props.onClick(categoryId);
    },
    render: function () {
        var details = this.props.categories.map(function (category, i) {
            return (
                <div>
                    <a className="btn btn-block btn-default btn-lg" onClick={this.onClick}>
                        {category}
                    </a>
                    <button id={i} onClick={this.onClick}> {category}</button>
                </div>
            );
        });

        return (
            <div className="col-xs-3">
                <a className="btn btn-block btn-default btn-lg">Home</a>
                {details}
            </div>
        )
    }
});

module.exports = CategoryList;
