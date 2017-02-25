var React = require('react');
var _ = require('underscore');
var mathUtils = require('../libs/mathUtils');

/**
 * Constants
 */ 
var TABLE_HEADERS = ["Date", "Average Temp (F)", "Max Temp", "Min Temp", "AC Triggers", "Heater Triggers"];
var HIGH_LIMIT = 75;
var LOW_LIMIT = 62;
/** ==================================================================================================== */

/**
 * WeatherSummary component receives props with month and weather data
 * It calculates some statistics based on the daily data and tabulates the results
 * TODO figure out how to make a box plot of daily data for the month. d3?
 */
var WeatherSummary = React.createClass({

  render: function() {
    return (
      <div>
        <h1>{this.props.month}</h1>
        <p>AC trigger limit is {HIGH_LIMIT} and Heater trigger limit is {LOW_LIMIT}</p>
        <table className="summary-table">
          <thead>
            <tr>{this._buildSummaryTableHeaders()}</tr>
          </thead>
          <tbody>
            {this._buildSummaryTable()}
          </tbody>
        </table>
      </div>
    )
  },

  _buildSummaryTableHeaders: function() {
    return _.map(TABLE_HEADERS, function(header, index){
      return (<th key={index}>{header}</th>);
    });
  },

  _buildSummaryTable: function() {
    var data = this.props.data;
    var rows = [];
    _.each(data, function(val, key){
      var temps = _.pluck(val, 'temperature');
      var avg =  mathUtils.average(temps);
      var max = mathUtils.max(temps);
      var min = mathUtils.min(temps);
      var highTriggers = mathUtils.highTriggers(temps, HIGH_LIMIT);
      var lowTriggers = mathUtils.lowTriggers(temps, LOW_LIMIT);

      rows.push(
      <tr key={key}>
        <td className="table-date">{key}</td>
        <td>{avg}</td>
        <td>{max}</td>
        <td>{min}</td>
        <td>{highTriggers}</td>
        <td>{lowTriggers}</td>
      </tr>)
    });
    return rows;
  }
});

module.exports = WeatherSummary;