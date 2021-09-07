"use strict";
var tslib_1 = require("tslib");
var rules_1 = (0, tslib_1.__importDefault)(require("./rules"));
var all_1 = (0, tslib_1.__importDefault)(require("./configs/all"));
module.exports = {
    parser: '@typescript-eslint/parser',
    rules: rules_1.default,
    configs: {
        all: all_1.default,
    },
};
