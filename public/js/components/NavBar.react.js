var React = require('react');

var NavBar = React.createClass({
  render: function(){
    return (
      <nav>
        <div>
          <div>Home</div>
          <div>Purchases</div>
          <div>Discover</div>
          <div>Slice Redux</div>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;