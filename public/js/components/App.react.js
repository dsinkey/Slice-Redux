var React = require('react');
var Header = require('./Header.react');
var NavBar = require('./NavBar.react');

var App = React.createClass({
    render: function(){
        return (
            <div id="background">
                <Header />
                <NavBar />
            </div>
        );
    }
});

module.exports = App;