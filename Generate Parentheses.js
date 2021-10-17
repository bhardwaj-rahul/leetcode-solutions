/**
https://leetcode.com/problems/generate-parentheses/
**/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const output = [];
    backtrack(output,'',0,0,n);
    return output;
};

function backtrack(output, curStr, open, close, max) {
    if (curStr.length === max *2) {
        output.push(curStr);
        return;
    }
    if (open < max) {
        backtrack(output,curStr+"(",open + 1, close,max);
    }
    if ( open > close) {
        backtrack(output,curStr+")",open, close + 1,max);
    }
}
