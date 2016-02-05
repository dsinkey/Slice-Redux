var React = require('react');

var Header = React.createClass({
  render: function (){
    return (
      <header>
        <div id="logo"></div>
        <span>
          <a>
            <span>Sign Out</span>
          </a>
        </span>
      </header>
    );
  }
});

module.exports = Header;
