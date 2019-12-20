/**
 * Split a string on the last occurrence of a given separator.
 * @param string The string to split.
 * @param separator The separator to split on.
 * @example
 * ```
 * const splitOnlast = require('split-on-last');
 *
 * splitOnlast('a-b-c', '-');
 * //=> ['a-b', 'c']
 *
 * splitOnlast('key:value:value2', ':');
 * //=> ['key:value', 'value2']
 *
 * splitOnlast('a---b---c', '---');
 * //=> ['a---b', 'c']
 *
 * splitOnlast('a-b-c', '+');
 * //=> []
 *
 * splitOnlast('abc', '');
 * //=> []
```
*/
declare function splitOnLast(
    string: string,
    separator: string
): [string, string?];

export = splitOnLast;
