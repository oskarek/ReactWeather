var React = require('react');

var WeatherMessage = ({temp, location}) => <h2>It is {temp} degree(s) in {location}.</h2>;

module.exports = WeatherMessage;
