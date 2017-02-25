var React = require('react');
var _ = require('underscore');
var mathUtils = require('../libs/mathUtils');

var TABLE_HEADERS = ["Date", "Average Temp (F)", "Max Temp", "Min Temp", "AC Triggers", "Heater Triggers"];
var HIGH_LIMIT = 69;
var LOW_LIMIT = 68;

var WeatherSummary = React.createClass({

  render: function() {
    return (
      <div>
        <h1>{this.props.month}</h1>
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