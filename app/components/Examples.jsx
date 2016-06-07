var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>
  <div>
    <h1 className="text-center page-title">Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to='/?location=Stockholm'>Stockholm, Sweden</Link>
      </li>
      <li>
        <Link to='/?location=Rio'>Rio, Brazil</Link>
      </li>
    </ol>
  </div>
;

module.exports = Examples;
