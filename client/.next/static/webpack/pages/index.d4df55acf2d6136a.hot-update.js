"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/getFilteredNotes.ts":
/*!***************************************!*\
  !*** ./src/utils/getFilteredNotes.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFilteredNotes: function() { return /* binding */ getFilteredNotes; }\n/* harmony export */ });\nconst getFilteredNotes = (notes, filterDate, filterLetters)=>{\n    return notes.filter((note)=>{\n        const isDateMatch = filterDate ? new Date(note.createdAt).toLocaleDateString() === new Date(filterDate).toLocaleDateString() : true;\n        const isTitleMatch = filterLetters ? note.title.toLowerCase().includes(filterLetters.toLowerCase()) : true;\n        return isDateMatch && isTitleMatch;\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZ2V0RmlsdGVyZWROb3Rlcy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTUEsbUJBQW1CLENBQy9CQyxPQUNBQyxZQUNBQztJQUVBLE9BQU9GLE1BQU1HLE1BQU0sQ0FBQ0MsQ0FBQUE7UUFDbkIsTUFBTUMsY0FBY0osYUFDakIsSUFBSUssS0FBS0YsS0FBS0csU0FBUyxFQUFFQyxrQkFBa0IsT0FDM0MsSUFBSUYsS0FBS0wsWUFBWU8sa0JBQWtCLEtBQ3ZDO1FBRUgsTUFBTUMsZUFBZVAsZ0JBQ2xCRSxLQUFLTSxLQUFLLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDVixjQUFjUyxXQUFXLE1BQzNEO1FBRUgsT0FBT04sZUFBZUk7SUFDdkI7QUFDRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9nZXRGaWx0ZXJlZE5vdGVzLnRzP2MyNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm90ZSB9IGZyb20gJy4vbm90ZXMucHJvcHMnXG5cbmV4cG9ydCBjb25zdCBnZXRGaWx0ZXJlZE5vdGVzID0gKFxuXHRub3RlczogTm90ZVtdLFxuXHRmaWx0ZXJEYXRlOiBzdHJpbmcgfCBudWxsLFxuXHRmaWx0ZXJMZXR0ZXJzOiBzdHJpbmcgfCBudWxsXG4pOiBOb3RlW10gPT4ge1xuXHRyZXR1cm4gbm90ZXMuZmlsdGVyKG5vdGUgPT4ge1xuXHRcdGNvbnN0IGlzRGF0ZU1hdGNoID0gZmlsdGVyRGF0ZVxuXHRcdFx0PyBuZXcgRGF0ZShub3RlLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkgPT09XG5cdFx0XHQgIG5ldyBEYXRlKGZpbHRlckRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpXG5cdFx0XHQ6IHRydWVcblxuXHRcdGNvbnN0IGlzVGl0bGVNYXRjaCA9IGZpbHRlckxldHRlcnNcblx0XHRcdD8gbm90ZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlckxldHRlcnMudG9Mb3dlckNhc2UoKSlcblx0XHRcdDogdHJ1ZVxuXG5cdFx0cmV0dXJuIGlzRGF0ZU1hdGNoICYmIGlzVGl0bGVNYXRjaFxuXHR9KVxufVxuIl0sIm5hbWVzIjpbImdldEZpbHRlcmVkTm90ZXMiLCJub3RlcyIsImZpbHRlckRhdGUiLCJmaWx0ZXJMZXR0ZXJzIiwiZmlsdGVyIiwibm90ZSIsImlzRGF0ZU1hdGNoIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImlzVGl0bGVNYXRjaCIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/getFilteredNotes.ts\n"));

/***/ })

});