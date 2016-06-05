var React = require('react');
var Nav = require('Nav');

var Main = ({children}) =>
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {children}
    </div>
;

module.exports = Main;
