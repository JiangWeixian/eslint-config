"use strict";
/**
 * refs: https://github.com/TristanFAURE/tslint/blob/4126PR/src/rules/commentDensityRule.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
var experimental_utils_1 = require("@typescript-eslint/experimental-utils");
var store_1 = require("../store");
var rule = experimental_utils_1.ESLintUtils.RuleCreator(function (name) { return name; })({
    name: 'comment-density',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Allows a minimum percentage of comment in the file',
            category: 'Stylistic Issues',
            requiresTypeChecking: false,
            recommended: 'warn',
        },
        messages: {
            density: "\n        Density of comment lines = Comment lines / (Lines of code + Comment lines) * 100\n        With such a formula:\n        50% means that the number of lines of code equals the number of comment lines\n        100% means that the file only contains comment lines\n      ",
        },
        schema: [
            {
                type: 'object',
                properties: {
                    min: {
                        type: 'number',
                        default: 10,
                    },
                },
            },
        ],
    },
    defaultOptions: [{ min: 10 }],
    create: function (context, _a) {
        var options = _a[0];
        function FAILURE_STRING(lineCount, percentLimit, missingLines) {
            var lineString = missingLines > 1 ? 'lines' : 'line';
            return ("This file has " + lineCount + "% of comments, " +
                ("which is lower than the minimum of " + percentLimit + "% allowed, ") +
                (missingLines + " " + lineString + " of comments missing"));
        }
        function apply() {
            var sourceFile = context.getSourceCode();
            var minPercent = options.min;
            var lineCount = sourceFile.getLines().length;
            var numberOfLinesOfComments = 0;
            var len = sourceFile.text.length;
            var comments = sourceFile.getAllComments();
            if (len > 0) {
                comments.forEach(function (comment) {
                    numberOfLinesOfComments = comment.loc.end.line - comment.loc.start.line + 1;
                });
            }
            var percentage = lineCount === 0 ? 0 : Math.round((numberOfLinesOfComments / lineCount) * 100);
            store_1.store.commentDensity += percentage;
            if (len !== 0 && percentage < minPercent) {
                var missingLines = Math.ceil((minPercent * lineCount) / 100) - numberOfLinesOfComments;
                context.report({
                    messageId: 'density',
                    data: {
                        density: FAILURE_STRING(percentage, minPercent, missingLines),
                    },
                    loc: {
                        line: 1,
                        column: 1,
                    },
                });
            }
        }
        return {
            Program: function () {
                apply();
            },
        };
    },
});
exports.default = rule;
