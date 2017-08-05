'use strict';

var createError = require('errno').create;

var ioncoreNodeError = createError('ioncoreNodeError');

var RPCError = createError('RPCError', ioncoreNodeError);

module.exports = {
  Error: ioncoreNodeError,
  RPCError: RPCError
};
