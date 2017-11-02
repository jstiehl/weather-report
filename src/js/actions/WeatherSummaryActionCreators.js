var request = require('superagent');
var config = require('../../config');
var API_URL = config.API_URL;

var WeatherSummaryActionCreator = {
  /**
   * fetchMonthlyWeatherData makes api call to server to fetch monthly weather data
   * @param  {String} month is the month of interest
   * @return {Action} dispatches with monthyl_data_received action typ and monthly weather data
   */

  fetchMonthlyWeatherData: function(month) {
    //redux-thunk middleware takes care of passing the dispatch arg
    return dispatch => {
      return request.get(API_URL + 'weather/' + month)
      .end(function(err, res){
        var data = res.body.data[month];
        if(err) {
          //need to add error handling
          console.log(err);
        }
        var action = {
          type: 'monthly_data_received',
          payload: {data: data}
        }
        dispatch(action);
      });
    }
  }
};

module.exports = WeatherSummaryActionCreator;