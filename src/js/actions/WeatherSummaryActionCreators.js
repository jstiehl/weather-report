var request = require('superagent');
var AppDispatcher = require('../../AppDispatcher');
var config = require('../../config');
var API_URL = config.API_URL;

var WeatherSummaryActionCreator = {
  /**
   * fetchMonthlyWeatherData makes api call to server to fetch monthly weather data
   * @param  {String} month is the month of interest
   * @return {Action} dispatches with monthyl_data_received action typ and monthly weather data
   */
  fetchMonthlyWeatherData: function(month) {
    request.get(API_URL + 'weather/' + month)
      .end(function(err, res){
        var data = res.body.data;
        if(err) {
          //need to add error handling
          console.log(err);
        }
        var action = {
          type: 'monthly_data_received',
          data: data
        }
        AppDispatcher.dispatch(action);
      });
  }
};

module.exports = WeatherSummaryActionCreator;