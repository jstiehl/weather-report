var _ = require('underscore');

var utils = {
  /**
   * @param  {Array} dataArray should be an array of numbers TODO: add validation of data typ
   * @return {Number} average the average of the numbers in dataArray
   */
  average: function(dataArray) {
    var total = _.reduce(dataArray, function(sum, num) { return sum + num; }, 0);
    var average = length === 1 ? dataArray[0] : total/(dataArray.length);
    return Math.round(average);
  },

  /**
   * @param  {Array} dataArray should be an array of numbers TODO: add validation of data typ
   * @return {Number} max the max of the numbers in dataArray
   */
  max: function(data) {
    return Math.round(_.max(data));
  },

  /**
   * @param  {Array} dataArray should be an array of numbers TODO: add validation of data typ
   * @return {Number} min the min of the numbers in dataArray
   */
  min: function(data) {
    return Math.round(_.min(data));
  },

  highTriggers: function(data, limit) {
    var crossAboveLimit = _.reject(data, function(point, index) {
      if(index !== 0){
        return data[index-1] < limit && point <= limit;
      }
      return point <= limit;
    });
    var triggers = crossAboveLimit.length;
    return triggers;
  },

  lowTriggers: function(data, limit) {
    var crossBelowLimit = _.reject(data, function(point, index) {
      if(index !== 0){
        return data[index-1] > limit && point >= limit;
      }
      return point >= limit;
    });
    var triggers = crossBelowLimit.length;
    return triggers;
  }
}

module.exports = utils;