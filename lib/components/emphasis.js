'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strikethrough = exports.bold = exports.italic = undefined;

var _util = require('../util');

var _constants = require('../util/constants');

/**
 * Markdown Emphasis utilities
 * 
 */

var italic = function italic(text) {
  return (0, _util.surround)(_constants.EMPHASIS_ITALICS, text);
};

var bold = function bold(text) {
  return (0, _util.surround)(_constants.EMPHASIS_BOLD, text);
};

var strikethrough = function strikethrough(text) {
  return (0, _util.surround)(_constants.EMPHASIS_STRIKETHROUGH, text);
};

exports.italic = italic;
exports.bold = bold;
exports.strikethrough = strikethrough;