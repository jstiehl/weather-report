var React = require('react');
var WeatherSummary = require('./WeatherSummary.react');
var WeatherSummaryActionCreators = require('../actions/WeatherSummaryActionCreators');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * WeatherSummaryContainer is responsible for fetching weather data from store or initiating action to fetch data
 * data is passed to WeatherSummary component for rendering of data
 */
var WeatherSummaryContainer = React.createClass({

  componentWillMount: function() {
    this._getMonthlyWeatherData();
  },

  render: function() {
    return (
      <WeatherSummary 
        data={this.props.data}
        month={this.props.month}/>
    );
  },

  _getMonthlyWeatherData: function() {
    var month = this.props.month.toLowerCase();
    this.props.fetchMonthlyWeatherData(month);
  }
});

const mapStateToProps = (state, ownProps = {}) => {
    return {
        data: state.weather.data,
        month: state.weather.month
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(WeatherSummaryActionCreators, dispatch);
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(WeatherSummaryContainer);