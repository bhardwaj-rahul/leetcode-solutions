/**
https://leetcode.com/problems/valid-parentheses/
**/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    if (s.length % 2 !== 0) {
        return false;
    }
    for (c of s) {
        switch(c) {
           case     '[':
           case     '{':
           case     '(':
                stack.push(c);
                break;
            case '}':
                var top = stack.pop();
                if (top !== '{') {
                    return false;
                }
                break;
            case ']':
                var top = stack.pop();
                if (top !== '[') {
                    return false;
                }
                break;
            case ')':
                var top = stack.pop();
                if (top !== '(') {
                    return false;
                }
                break;
                
        }
        
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};
