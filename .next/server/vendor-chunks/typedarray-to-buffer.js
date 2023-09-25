"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/typedarray-to-buffer";
exports.ids = ["vendor-chunks/typedarray-to-buffer"];
exports.modules = {

/***/ "(rsc)/./node_modules/typedarray-to-buffer/index.js":
/*!****************************************************!*\
  !*** ./node_modules/typedarray-to-buffer/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Convert a typed array to a Buffer without a copy\n *\n * Author:   Feross Aboukhadijeh <https://feross.org>\n * License:  MIT\n *\n * `npm install typedarray-to-buffer`\n */ \nvar isTypedArray = (__webpack_require__(/*! is-typedarray */ \"(rsc)/./node_modules/is-typedarray/index.js\").strict);\nmodule.exports = function typedarrayToBuffer(arr) {\n    if (isTypedArray(arr)) {\n        // To avoid a copy, use the typed array's underlying ArrayBuffer to back new Buffer\n        var buf = Buffer.from(arr.buffer);\n        if (arr.byteLength !== arr.buffer.byteLength) {\n            // Respect the \"view\", i.e. byteOffset and byteLength, without doing a copy\n            buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);\n        }\n        return buf;\n    } else {\n        // Pass through all other types to `Buffer.from`\n        return Buffer.from(arr);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdHlwZWRhcnJheS10by1idWZmZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQztBQUVELElBQUlBLGVBQWVDLGdHQUErQjtBQUVsREUsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLG1CQUFvQkMsR0FBRztJQUMvQyxJQUFJTixhQUFhTSxNQUFNO1FBQ3JCLG1GQUFtRjtRQUNuRixJQUFJQyxNQUFNQyxPQUFPQyxJQUFJLENBQUNILElBQUlJLE1BQU07UUFDaEMsSUFBSUosSUFBSUssVUFBVSxLQUFLTCxJQUFJSSxNQUFNLENBQUNDLFVBQVUsRUFBRTtZQUM1QywyRUFBMkU7WUFDM0VKLE1BQU1BLElBQUlLLEtBQUssQ0FBQ04sSUFBSU8sVUFBVSxFQUFFUCxJQUFJTyxVQUFVLEdBQUdQLElBQUlLLFVBQVU7UUFDakU7UUFDQSxPQUFPSjtJQUNULE9BQU87UUFDTCxnREFBZ0Q7UUFDaEQsT0FBT0MsT0FBT0MsSUFBSSxDQUFDSDtJQUNyQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktdG8tYnVmZmVyL2luZGV4LmpzPzYyMGYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJ0IGEgdHlwZWQgYXJyYXkgdG8gYSBCdWZmZXIgd2l0aG91dCBhIGNvcHlcbiAqXG4gKiBBdXRob3I6ICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogTGljZW5zZTogIE1JVFxuICpcbiAqIGBucG0gaW5zdGFsbCB0eXBlZGFycmF5LXRvLWJ1ZmZlcmBcbiAqL1xuXG52YXIgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnaXMtdHlwZWRhcnJheScpLnN0cmljdFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHR5cGVkYXJyYXlUb0J1ZmZlciAoYXJyKSB7XG4gIGlmIChpc1R5cGVkQXJyYXkoYXJyKSkge1xuICAgIC8vIFRvIGF2b2lkIGEgY29weSwgdXNlIHRoZSB0eXBlZCBhcnJheSdzIHVuZGVybHlpbmcgQXJyYXlCdWZmZXIgdG8gYmFjayBuZXcgQnVmZmVyXG4gICAgdmFyIGJ1ZiA9IEJ1ZmZlci5mcm9tKGFyci5idWZmZXIpXG4gICAgaWYgKGFyci5ieXRlTGVuZ3RoICE9PSBhcnIuYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICAgIC8vIFJlc3BlY3QgdGhlIFwidmlld1wiLCBpLmUuIGJ5dGVPZmZzZXQgYW5kIGJ5dGVMZW5ndGgsIHdpdGhvdXQgZG9pbmcgYSBjb3B5XG4gICAgICBidWYgPSBidWYuc2xpY2UoYXJyLmJ5dGVPZmZzZXQsIGFyci5ieXRlT2Zmc2V0ICsgYXJyLmJ5dGVMZW5ndGgpXG4gICAgfVxuICAgIHJldHVybiBidWZcbiAgfSBlbHNlIHtcbiAgICAvLyBQYXNzIHRocm91Z2ggYWxsIG90aGVyIHR5cGVzIHRvIGBCdWZmZXIuZnJvbWBcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oYXJyKVxuICB9XG59XG4iXSwibmFtZXMiOlsiaXNUeXBlZEFycmF5IiwicmVxdWlyZSIsInN0cmljdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0eXBlZGFycmF5VG9CdWZmZXIiLCJhcnIiLCJidWYiLCJCdWZmZXIiLCJmcm9tIiwiYnVmZmVyIiwiYnl0ZUxlbmd0aCIsInNsaWNlIiwiYnl0ZU9mZnNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/typedarray-to-buffer/index.js\n");

/***/ })

};
;