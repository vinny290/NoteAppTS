"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/notesSlice.ts":
/*!*********************************!*\
  !*** ./src/store/notesSlice.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNote: function() { return /* binding */ addNote; },\n/* harmony export */   createNote: function() { return /* binding */ createNote; },\n/* harmony export */   deleteNote: function() { return /* binding */ deleteNote; },\n/* harmony export */   deleteNoteById: function() { return /* binding */ deleteNoteById; },\n/* harmony export */   fetchNotes: function() { return /* binding */ fetchNotes; },\n/* harmony export */   setNotes: function() { return /* binding */ setNotes; },\n/* harmony export */   updateNote: function() { return /* binding */ updateNote; },\n/* harmony export */   updateNoteById: function() { return /* binding */ updateNoteById; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\nconst initialState = {\n    notes: [],\n    status: \"idle\",\n    error: null\n};\nconst notesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"notes\",\n    initialState,\n    reducers: {\n        setNotes (state, action) {\n            state.notes = action.payload;\n        },\n        addNote (state, action) {\n            state.notes.push(action.payload);\n        },\n        updateNote (state, action) {\n            const index = state.notes.findIndex((note)=>note.id === action.payload.id);\n            if (index !== -1) {\n                state.notes[index] = action.payload;\n            }\n        },\n        deleteNote (state, action) {\n            state.notes = state.notes.filter((note)=>note.id !== action.payload);\n        }\n    }\n});\nconst { setNotes, addNote, updateNote, deleteNote } = notesSlice.actions;\n// Типизированный thunk action\nconst fetchNotes = ()=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:4000/notes\");\n            dispatch(setNotes(response.data));\n        } catch (error) {\n            console.error(\"Failed to fetch notes:\", error);\n        }\n    };\nconst createNote = (newNote)=>async (dispatch)=>{\n        try {\n            const noteWithId = {\n                ...newNote,\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n                createdAt: new Date().toISOString()\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:4000/notes\", noteWithId);\n            dispatch(addNote(response.data));\n        } catch (error) {\n            console.error(\"Failed to create note:\", error);\n        }\n    };\nconst updateNoteById = (updatedNote)=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"http://localhost:4000/notes/\".concat(updatedNote.id), updatedNote);\n            dispatch(updateNote(response.data));\n        } catch (error) {\n            console.error(\"Failed to update note:\", error);\n        }\n    };\nconst deleteNoteById = (id)=>async (dispatch)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(\"http://localhost:4000/notes/\".concat(id));\n            dispatch(deleteNote(id));\n        } catch (error) {\n            console.error(\"Failed to delete note:\", error);\n        }\n    };\n/* harmony default export */ __webpack_exports__[\"default\"] = (notesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbm90ZXNTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM2RDtBQUNwQztBQUNVO0FBR25DLE1BQU1JLGVBQTJCO0lBQ2hDQyxPQUFPLEVBQUU7SUFDVEMsUUFBUTtJQUNSQyxPQUFPO0FBQ1I7QUFFQSxNQUFNQyxhQUFhUiw2REFBV0EsQ0FBQztJQUM5QlMsTUFBTTtJQUNOTDtJQUNBTSxVQUFVO1FBQ1RDLFVBQVNDLEtBQUssRUFBRUMsTUFBNkI7WUFDNUNELE1BQU1QLEtBQUssR0FBR1EsT0FBT0MsT0FBTztRQUM3QjtRQUNBQyxTQUFRSCxLQUFLLEVBQUVDLE1BQTJCO1lBQ3pDRCxNQUFNUCxLQUFLLENBQUNXLElBQUksQ0FBQ0gsT0FBT0MsT0FBTztRQUNoQztRQUNBRyxZQUFXTCxLQUFLLEVBQUVDLE1BQTJCO1lBQzVDLE1BQU1LLFFBQVFOLE1BQU1QLEtBQUssQ0FBQ2MsU0FBUyxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxFQUFFLEtBQUtSLE9BQU9DLE9BQU8sQ0FBQ08sRUFBRTtZQUN6RSxJQUFJSCxVQUFVLENBQUMsR0FBRztnQkFDakJOLE1BQU1QLEtBQUssQ0FBQ2EsTUFBTSxHQUFHTCxPQUFPQyxPQUFPO1lBQ3BDO1FBQ0Q7UUFDQVEsWUFBV1YsS0FBSyxFQUFFQyxNQUE2QjtZQUM5Q0QsTUFBTVAsS0FBSyxHQUFHTyxNQUFNUCxLQUFLLENBQUNrQixNQUFNLENBQUNILENBQUFBLE9BQVFBLEtBQUtDLEVBQUUsS0FBS1IsT0FBT0MsT0FBTztRQUNwRTtJQUNEO0FBQ0Q7QUFFTyxNQUFNLEVBQUVILFFBQVEsRUFBRUksT0FBTyxFQUFFRSxVQUFVLEVBQUVLLFVBQVUsRUFBRSxHQUFHZCxXQUFXZ0IsT0FBTztBQUUvRSw4QkFBOEI7QUFDdkIsTUFBTUMsYUFBYSxJQUFNLE9BQU9DO1FBQ3RDLElBQUk7WUFDSCxNQUFNQyxXQUFXLE1BQU0xQiw2Q0FBS0EsQ0FBQzJCLEdBQUcsQ0FBQztZQUNqQ0YsU0FBU2YsU0FBU2dCLFNBQVNFLElBQUk7UUFDaEMsRUFBRSxPQUFPdEIsT0FBTztZQUNmdUIsUUFBUXZCLEtBQUssQ0FBQywwQkFBMEJBO1FBQ3pDO0lBQ0QsRUFBQztBQUVNLE1BQU13QixhQUNaLENBQUNDLFVBQ0QsT0FBT047UUFDTixJQUFJO1lBQ0gsTUFBTU8sYUFBbUI7Z0JBQ3hCLEdBQUdELE9BQU87Z0JBQ1ZYLElBQUlsQixnREFBTUE7Z0JBQ1YrQixXQUFXLElBQUlDLE9BQU9DLFdBQVc7WUFDbEM7WUFDQSxNQUFNVCxXQUFXLE1BQU0xQiw2Q0FBS0EsQ0FBQ29DLElBQUksQ0FDaEMsK0JBQ0FKO1lBRURQLFNBQVNYLFFBQVFZLFNBQVNFLElBQUk7UUFDL0IsRUFBRSxPQUFPdEIsT0FBTztZQUNmdUIsUUFBUXZCLEtBQUssQ0FBQywwQkFBMEJBO1FBQ3pDO0lBQ0QsRUFBQztBQUVLLE1BQU0rQixpQkFDWixDQUFDQyxjQUFzQixPQUFPYjtRQUM3QixJQUFJO1lBQ0gsTUFBTUMsV0FBVyxNQUFNMUIsNkNBQUtBLENBQUN1QyxHQUFHLENBQy9CLCtCQUE4QyxPQUFmRCxZQUFZbEIsRUFBRSxHQUM3Q2tCO1lBRURiLFNBQVNULFdBQVdVLFNBQVNFLElBQUk7UUFDbEMsRUFBRSxPQUFPdEIsT0FBTztZQUNmdUIsUUFBUXZCLEtBQUssQ0FBQywwQkFBMEJBO1FBQ3pDO0lBQ0QsRUFBQztBQUVLLE1BQU1rQyxpQkFBaUIsQ0FBQ3BCLEtBQWUsT0FBT0s7UUFDcEQsSUFBSTtZQUNILE1BQU16Qiw2Q0FBS0EsQ0FBQ3lDLE1BQU0sQ0FBQywrQkFBa0MsT0FBSHJCO1lBQ2xESyxTQUFTSixXQUFXRDtRQUNyQixFQUFFLE9BQU9kLE9BQU87WUFDZnVCLFFBQVF2QixLQUFLLENBQUMsMEJBQTBCQTtRQUN6QztJQUNELEVBQUM7QUFFRCwrREFBZUMsV0FBV21DLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL25vdGVzU2xpY2UudHM/MzM2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb3RlLCBOb3Rlc1N0YXRlIH0gZnJvbSAnQC9zdG9yZS9zdG9yZVR5cGVzLnByb3BzJyAvLyDQmNC80L/QvtGA0YLQuNGA0YPQtdC8INGC0LjQv9GLXG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tICcuL3N0b3JlJ1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IE5vdGVzU3RhdGUgPSB7XG5cdG5vdGVzOiBbXSxcblx0c3RhdHVzOiAnaWRsZScsXG5cdGVycm9yOiBudWxsLFxufVxuXG5jb25zdCBub3Rlc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuXHRuYW1lOiAnbm90ZXMnLFxuXHRpbml0aWFsU3RhdGUsXG5cdHJlZHVjZXJzOiB7XG5cdFx0c2V0Tm90ZXMoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxOb3RlW10+KSB7XG5cdFx0XHRzdGF0ZS5ub3RlcyA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0fSxcblx0XHRhZGROb3RlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Tm90ZT4pIHtcblx0XHRcdHN0YXRlLm5vdGVzLnB1c2goYWN0aW9uLnBheWxvYWQpXG5cdFx0fSxcblx0XHR1cGRhdGVOb3RlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Tm90ZT4pIHtcblx0XHRcdGNvbnN0IGluZGV4ID0gc3RhdGUubm90ZXMuZmluZEluZGV4KG5vdGUgPT4gbm90ZS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpXG5cdFx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdHN0YXRlLm5vdGVzW2luZGV4XSA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWxldGVOb3RlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xuXHRcdFx0c3RhdGUubm90ZXMgPSBzdGF0ZS5ub3Rlcy5maWx0ZXIobm90ZSA9PiBub3RlLmlkICE9PSBhY3Rpb24ucGF5bG9hZClcblx0XHR9LFxuXHR9LFxufSlcblxuZXhwb3J0IGNvbnN0IHsgc2V0Tm90ZXMsIGFkZE5vdGUsIHVwZGF0ZU5vdGUsIGRlbGV0ZU5vdGUgfSA9IG5vdGVzU2xpY2UuYWN0aW9uc1xuXG4vLyDQotC40L/QuNC30LjRgNC+0LLQsNC90L3Ri9C5IHRodW5rIGFjdGlvblxuZXhwb3J0IGNvbnN0IGZldGNoTm90ZXMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ub3RlcycpXG5cdFx0ZGlzcGF0Y2goc2V0Tm90ZXMocmVzcG9uc2UuZGF0YSkpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIG5vdGVzOicsIGVycm9yKVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOb3RlID1cblx0KG5ld05vdGU6IE9taXQ8Tm90ZSwgJ2lkJyB8ICdjcmVhdGVkQXQnPikgPT5cblx0YXN5bmMgKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBub3RlV2l0aElkOiBOb3RlID0ge1xuXHRcdFx0XHQuLi5uZXdOb3RlLFxuXHRcdFx0XHRpZDogdXVpZHY0KCksXG5cdFx0XHRcdGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuXHRcdFx0XHQnaHR0cDovL2xvY2FsaG9zdDo0MDAwL25vdGVzJyxcblx0XHRcdFx0bm90ZVdpdGhJZFxuXHRcdFx0KVxuXHRcdFx0ZGlzcGF0Y2goYWRkTm90ZShyZXNwb25zZS5kYXRhKSlcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBub3RlOicsIGVycm9yKVxuXHRcdH1cblx0fVxuXG5leHBvcnQgY29uc3QgdXBkYXRlTm90ZUJ5SWQgPVxuXHQodXBkYXRlZE5vdGU6IE5vdGUpID0+IGFzeW5jIChkaXNwYXRjaDogQXBwRGlzcGF0Y2gpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoXG5cdFx0XHRcdGBodHRwOi8vbG9jYWxob3N0OjQwMDAvbm90ZXMvJHt1cGRhdGVkTm90ZS5pZH1gLFxuXHRcdFx0XHR1cGRhdGVkTm90ZVxuXHRcdFx0KVxuXHRcdFx0ZGlzcGF0Y2godXBkYXRlTm90ZShyZXNwb25zZS5kYXRhKSlcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBub3RlOicsIGVycm9yKVxuXHRcdH1cblx0fVxuXG5leHBvcnQgY29uc3QgZGVsZXRlTm90ZUJ5SWQgPSAoaWQ6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo0MDAwL25vdGVzLyR7aWR9YClcblx0XHRkaXNwYXRjaChkZWxldGVOb3RlKGlkKSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIG5vdGU6JywgZXJyb3IpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbm90ZXNTbGljZS5yZWR1Y2VyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJheGlvcyIsInY0IiwidXVpZHY0IiwiaW5pdGlhbFN0YXRlIiwibm90ZXMiLCJzdGF0dXMiLCJlcnJvciIsIm5vdGVzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXROb3RlcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFkZE5vdGUiLCJwdXNoIiwidXBkYXRlTm90ZSIsImluZGV4IiwiZmluZEluZGV4Iiwibm90ZSIsImlkIiwiZGVsZXRlTm90ZSIsImZpbHRlciIsImFjdGlvbnMiLCJmZXRjaE5vdGVzIiwiZGlzcGF0Y2giLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJjb25zb2xlIiwiY3JlYXRlTm90ZSIsIm5ld05vdGUiLCJub3RlV2l0aElkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicG9zdCIsInVwZGF0ZU5vdGVCeUlkIiwidXBkYXRlZE5vdGUiLCJwdXQiLCJkZWxldGVOb3RlQnlJZCIsImRlbGV0ZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/notesSlice.ts\n"));

/***/ })

});