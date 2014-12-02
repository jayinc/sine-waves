/* @flow */
/************************************************
 * @file  Left to right easing functions
 * @author Isaac Suttell
 ************************************************/

/**
 * This holds all of the easing objects and can be added to by the user
 *
 * @type    {Object}
 */
var Ease = {};

/**
 * Do not apply any easing
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */
Ease.Linear = function(percent, amplitude) {
  return amplitude;
};

/**
 * Easing function to control how string each wave is from
 * left to right
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */
Ease.SineIn = function(percent, amplitude) {
  return amplitude * (Math.sin(percent * Math.PI - HALFPI) + 1) * 0.5;
};

/**
 * Easing function to control how string each wave is from
 * left to right
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */
Ease.SineOut = function(percent, amplitude) {
  return amplitude * (Math.sin(percent * Math.PI + HALFPI) + 1) * 0.5;
};

/**
 * Easing function to control how string each wave is from
 * left to right
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */
Ease.SineInOut = function(percent, amplitude) {
  return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5;
};
