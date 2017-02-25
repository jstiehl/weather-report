var AppDispatcher = require('../../AppDispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

var CHANGE_EVENT = 'change';

var monthlyData = {};

var WeatherSummaryStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  _monthlyDataReceived: function(data) {
    _.extend(monthlyData, data);
  },

  getMonthlyData: function(month) {
    return monthlyData[month];
  }
});

WeatherSummaryStore.dispatchToken = AppDispatcher.register(function(payload){
  switch (payload.type) {
    case 'monthly_data_received':
    console.log(payload.data);
      WeatherSummaryStore._monthlyDataReceived(payload.data);
      WeatherSummaryStore.emitChange();
      break;
    default:
      break;
  }
});

module.exports = WeatherSummaryStore;