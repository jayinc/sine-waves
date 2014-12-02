/* @flow */
/************************************************
 * @file  General utility functions
 * @author  Isaac Suttell
 ************************************************/

/**
 * Utilities wrapper
 *
 * @type    {Object}
 */
var Utilities = {};

/**
 * Checks to see if a var is a speficied type
 *
 * @param  {Mixed}  obj  var to check
 *
 * @return {Boolean}
 */
var isType = Utilities.isType = function(obj, type) {
  var result = {}.toString.call(obj).toLowerCase();
  return result === '[object ' + type.toLowerCase() + ']';
};

/**
 * Basic Extend Function
 *
 * @param     {Object}    dest   object to fill
 * @param     {Object}    src    object to copy
 *
 * @return    {Object}
 */
var defaults = Utilities.defaults = function(dest, src) {
  if (!isType(src, 'object')) {
    src = {};
  }
  for (var i in src) {
    if (src.hasOwnProperty(i)) {
      dest[i] = src[i];
    }
  }
  return dest;
};

/**
 * Convert degress to radians for rotation function
 *
 * @param     {Number}    degrees
 *
 * @return    {Number}
 */
var degreesToRadians = Utilities.degreesToRadians = function(degrees) {
  if (!isType(degrees, 'number')) {
    throw new TypeError('Degrees is not a number');
  }
  return degrees * PI180;
};

/**
 * You can either directly specify a easing function, use a built in function
 * or default to the basic SineInOut
 *
 * @param     {Object}   obj     Object to search in
 * @param     {Mixed}    name    String || Function
 * @param     {String}   def     Default funciton
 *
 * @return    {Function}
 */
var getFn = Utilities.getFn = function(obj, name, def) {
  if (isType(name, 'function')) {
    return name;
  } else if (isType(name, 'string') && isType(obj[name], 'function')) {
    return obj[name];
  } else {
    return obj[def];
  }
};
