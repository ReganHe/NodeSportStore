import React from 'react';

export default  React.createClass({
    render: function () {
        return (
            <div>
                <div className="navbar navbar-inverse">
                    <a className="navbar-brand" href="#">SPORTS STORE</a>
                </div>
                {this.props.children }
            </div>
        );
    }
});
