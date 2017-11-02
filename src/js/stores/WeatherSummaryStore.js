// dependencies ----------------------------------------------------------------------

import Reflux from 'reflux'
import Actions from '../actions/WeatherActions.js'

import request from 'superagent';
import config from '../../config';
let API_URL = config.API_URL;

// store setup -----------------------------------------------------------------------

let WeatherSummaryStore = Reflux.createStore({
  listenables: Actions,

  init: function() {
    this.setInitialState()
    this.fetchMonthlyWeatherData();
  },

  getInitialState: function() {
    return this.data
  },

  // state data ------------------------------------------------------------------------

  data: {},

  update: function(data, callback) {
    for (let prop in data) {
      this.data[prop] = data[prop]
    }
    this.trigger(this.data, callback)
  },

  /**
     * Set Initial State
     *
     * Sets the state to the data object defined
     * inside the function. Also takes a diffs object
     * which will set the state to the initial state
     * with any differences passed.
     */
  setInitialState: function(diffs, callback) {
    let data = {
      data: {},
      month: 'June'
    };

    for (let prop in diffs) {
      data[prop] = diffs[prop]
    }
    this.update(data, callback)
  },

  // actions ---------------------------------------------------------------------------

    /**
   * fetchMonthlyWeatherData makes api call to server to fetch monthly weather data
   * @param  {String} month is the month of interest
   * @return {Action} dispatches with monthyl_data_received action typ and monthly weather data
   */
  fetchMonthlyWeatherData: function() {
    let month = this.data.month.toLowerCase();
    var self = this;
    if(!month) return;
    request.get(API_URL + 'weather/' + month)
      .end(function(err, res){
        var data = res.body.data[month];
        if(err) {
          //need to add error handling
          console.log(err);
        }
        self.update({data: data})
      });
  }
})

module.exports = WeatherSummaryStore