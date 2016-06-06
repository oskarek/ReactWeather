var React = require('react');

var WeatherMessage = ({temp, location}) => <h3 className="text-center">It is {temp} degree(s) in {location}.</h3>;

module.exports = WeatherMessage;
