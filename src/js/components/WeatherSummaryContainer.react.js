var React = require('react');
var Reflux = require('reflux');
var WeatherSummary = require('./WeatherSummary.react');
var WeatherSummaryStore = require('../stores/WeatherSummaryStore');

/**
 * WeatherSummaryContainer is responsible for fetching weather data from store or initiating action to fetch data
 * data is passed to WeatherSummary component for rendering of data
 */
var WeatherSummaryContainer = React.createClass({
  mixins: [Reflux.connect(WeatherSummaryStore, "weather")],

  render: function() {
    return (
      <WeatherSummary 
        data={this.state.weather.data}
        month={this.state.weather.month}/>
    );
  }
});

module.exports = WeatherSummaryContainer;