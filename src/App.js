var React = require('react');
var WeatherSummaryContainer = require('./js/components/WeatherSummaryContainer.react');

import './App.css';
import logo from './rain-cloud.svg';

var App = React.createClass ({
  render: function() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weather Summary for Cascade Energy</h2>
        </div>
        <div className="App-intro">
          <WeatherSummaryContainer />
        </div>
      </div>
    );
  }
});

export default App;
