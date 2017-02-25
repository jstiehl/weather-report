var React = require('react');
var WeatherSummary = require('./WeatherSummary.react');
var WeatherSummaryActionCreators = require('../actions/WeatherSummaryActionCreators');
var WeatherSummaryStore = require('../stores/WeatherSummaryStore');

var WeatherSummaryContainer = React.createClass({
  getInitialState: function() {
    return {
      data: {
        "Day One": [{
          time: 1,
          temperature: 67
        }, {
          time: 2,
          temperature: 67
        }, {
          time: 3,
          temperature: 67
        }],
        "Day Two": [{
          time: 1,
          temperature: 67
        }, {
          time: 2,
          temperature: 67
        }, {
          time: 3,
          temperature: 67
        }],
        "Day Three": [{
          time: 1,
          temperature: 67
        }, {
          time: 2,
          temperature: 67
        }, {
          time: 3,
          temperature: 67
        }],
        "Day Six": [{
          time: 1,
          temperature: 67
        }, {
          time: 2,
          temperature: 67
        }, {
          time: 3,
          temperature: 67
        }],
        "Day Five": [{
          time: 1,
          temperature: 67
        }, {
          time: 2,
          temperature: 67
        }, {
          time: 3,
          temperature: 67
        }]
      },
      month: 'June'
    }
  },

  componentWillMount: function() {
    //this._getMonthlyWeatherData();
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
    var monthlyData = WeatherSummaryStore.getMonthlyData[month];
    if(!monthlyData) {
      WeatherSummaryActionCreators.fetchMonthlyWeatherData(month);
    }
    this.setState({
      data: monthlyData || {}
    })
  }
});

module.exports = WeatherSummaryContainer;