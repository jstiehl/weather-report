var React = require('react');
var WeatherSummary = require('./WeatherSummary.react');
var WeatherSummaryActionCreators = require('../actions/WeatherSummaryActionCreators');
var WeatherSummaryStore = require('../stores/WeatherSummaryStore');

/**
 * WeatherSummaryContainer is responsible for fetching weather data from store or initiating action to fetch data
 * data is passed to WeatherSummary component for rendering of data
 */
var WeatherSummaryContainer = React.createClass({
  getInitialState: function() {
    return {
      data: {},
      month: 'June'
    }
  },

  componentWillMount: function() {
    this._getMonthlyWeatherData();
  },

  componentDidMount: function() {
    WeatherSummaryStore.addChangeListener(this._getMonthlyWeatherData);
  },

  componentWillUnmount: function() {
    WeatherSummaryStore.removeChangeListener(this._getMonthlyWeatherData);
  },

  render: function() {
    return (
      <WeatherSummary 
        data={this.state.data}
        month={this.state.month}/>
    );
  },

  _getMonthlyWeatherData: function() {
    var month = this.state.month.toLowerCase();
    var monthlyData = WeatherSummaryStore.getMonthlyData(month);
    if(!monthlyData) {
      WeatherSummaryActionCreators.fetchMonthlyWeatherData(month);
    }
    this.setState({
      data: monthlyData || {}
    })
  }
});

module.exports = WeatherSummaryContainer;