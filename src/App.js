var React = require('react');
var WeatherSummaryContainer = require('./js/components/WeatherSummaryContainer.react');

import './App.css';
import logo from './rain-cloud.svg';
import darksky from './poweredby-oneline.png'

var App = React.createClass ({
  render: function() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weather Summary</h2>
        </div>
        <div className="App-intro">
          <WeatherSummaryContainer />
        </div>
        <footer>
          <a href="https://darksky.net/poweredby/" target="_blank"><img src={darksky} alt="Powered By Dark Sky" /></a>
        </footer>
      </div>
    );
  }
});

export default App;
