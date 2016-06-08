import React from 'react'

export default React.createClass({
    propTypes: {
        categories: React.PropTypes.array.isRequired
    },

    render () {
        var details = this.props.categories.map(function (category, i) {
            return (
                <a className="btn btn-block btn-default btn-lg">
                    {category}
                </a>
            );
        });
        return (
            <div>
                <a className="btn btn-block btn-default btn-lg">Home</a>
                {details}
            </div>
        );
    }
});
