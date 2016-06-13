
var React = require("react");
var Link = require('react-router').Link;

var MainNav = require('./mainNav');

var MainHeader = React.createClass({
  render: function () {
    return (
      <header className='main-header navbar navbar-static-top container'>
        <div className='container-fluid'>
          <Link to="list" className='navbar-brand logo'>ProductBuilder</Link>
          <MainNav />
        </div>
      </header>
    );
  }
});

module.exports = MainHeader;
