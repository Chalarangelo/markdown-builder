'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headers = require('./headers');

var Headers = _interopRequireWildcard(_headers);

var _emphasis = require('./emphasis');

var Emphasis = _interopRequireWildcard(_emphasis);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  Headers: Headers,
  Emphasis: Emphasis
};