"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about-us/page",{

/***/ "(app-pages-browser)/./src/components/about/Counter.js":
/*!*****************************************!*\
  !*** ./src/components/about/Counter.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CounterSection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst counterData = [\n    {\n        endValue: 5000,\n        label: 'Happy Clients',\n        color: 'fill-rose-300'\n    },\n    {\n        endValue: 95,\n        label: 'Success Rate',\n        color: 'fill-rose-300'\n    },\n    {\n        endValue: 15,\n        label: 'Years Experience',\n        color: 'fill-rose-300'\n    },\n    {\n        endValue: 25,\n        label: 'Expert Doctors',\n        color: 'fill-rose-300'\n    }\n];\nfunction CounterCard(param) {\n    let { endValue, label, color } = param;\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CounterCard.useEffect\": ()=>{\n            const duration = 2000; // 2 seconds\n            const steps = 50;\n            const stepValue = endValue / steps;\n            const stepDuration = duration / steps;\n            let currentStep = 0;\n            const timer = setInterval({\n                \"CounterCard.useEffect.timer\": ()=>{\n                    currentStep++;\n                    setCount(Math.min(Math.round(stepValue * currentStep), endValue));\n                    if (currentStep >= steps) {\n                        clearInterval(timer);\n                    }\n                }\n            }[\"CounterCard.useEffect.timer\"], stepDuration);\n            return ({\n                \"CounterCard.useEffect\": ()=>clearInterval(timer)\n            })[\"CounterCard.useEffect\"];\n        }\n    }[\"CounterCard.useEffect\"], [\n        endValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hover:-translate-y-2 group bg-neutral-50 duration-500 w-[280px] h-50 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                viewBox: \"0 0 200 200\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \"absolute blur z-10 duration-500 group-hover:blur-none group-hover:scale-105 \".concat(color),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    transform: \"translate(100 100)\",\n                    d: \"M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Alphabet Data\\\\panacea\\\\src\\\\components\\\\about\\\\Counter.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Alphabet Data\\\\panacea\\\\src\\\\components\\\\about\\\\Counter.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-20 flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold text-6xl\",\n                        children: [\n                            count,\n                            \"+\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Alphabet Data\\\\panacea\\\\src\\\\components\\\\about\\\\Counter.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold\",\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Alphabet Data\\\\panacea\\\\src\\\\components\\\\about\\\\Counter.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Alphabet Data\\\\panacea\\\\src\\\\components\\\\about\\\\Counter.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Alphabet Data\\\\panacea\\\\src\\\\components\\\\about\\\\Counter.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(CounterCard, \"/xL7qdScToREtqzbt5GZ1kHtYjQ=\");\n_c = CounterCard;\nfunction CounterSection() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-white py-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center gap-8\",\n                children: counterData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CounterCard, {\n                        endValue: data.endValue,\n                        label: data.label,\n                        color: data.color\n                    }, index, false, {\n                        fileName: \"D:\\\\Alphabet Data\\\\panacea\\\\src\\\\components\\\\about\\\\Counter.js\",\n                        lineNumber: 82,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\Alphabet Data\\\\panacea\\\\src\\\\components\\\\about\\\\Counter.js\",\n                lineNumber: 80,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Alphabet Data\\\\panacea\\\\src\\\\components\\\\about\\\\Counter.js\",\n            lineNumber: 79,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Alphabet Data\\\\panacea\\\\src\\\\components\\\\about\\\\Counter.js\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, this);\n}\n_c1 = CounterSection;\nvar _c, _c1;\n$RefreshReg$(_c, \"CounterCard\");\n$RefreshReg$(_c1, \"CounterSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Fib3V0L0NvdW50ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW1EO0FBRW5ELE1BQU1HLGNBQWM7SUFDaEI7UUFDSUMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87SUFDWDtJQUNBO1FBQ0lGLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxPQUFPO0lBQ1g7SUFDQTtRQUNJRixVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztJQUNYO0lBQ0E7UUFDSUYsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87SUFDWDtDQUNIO0FBRUQsU0FBU0MsWUFBWSxLQUEwQjtRQUExQixFQUFFSCxRQUFRLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFLEdBQTFCOztJQUNqQixNQUFNLENBQUNFLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQTtpQ0FBQztZQUNOLE1BQU1TLFdBQVcsTUFBTSxZQUFZO1lBQ25DLE1BQU1DLFFBQVE7WUFDZCxNQUFNQyxZQUFZUixXQUFXTztZQUM3QixNQUFNRSxlQUFlSCxXQUFXQztZQUNoQyxJQUFJRyxjQUFjO1lBRWxCLE1BQU1DLFFBQVFDOytDQUFZO29CQUN0QkY7b0JBQ0FMLFNBQVNRLEtBQUtDLEdBQUcsQ0FBQ0QsS0FBS0UsS0FBSyxDQUFDUCxZQUFZRSxjQUFjVjtvQkFFdkQsSUFBSVUsZUFBZUgsT0FBTzt3QkFDdEJTLGNBQWNMO29CQUNsQjtnQkFDSjs4Q0FBR0Y7WUFFSDt5Q0FBTyxJQUFNTyxjQUFjTDs7UUFDL0I7Z0NBQUc7UUFBQ1g7S0FBUztJQUViLHFCQUNJLDhEQUFDaUI7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNDO2dCQUNHQyxTQUFRO2dCQUNSQyxPQUFNO2dCQUNOSCxXQUFXLCtFQUFxRixPQUFOaEI7MEJBRTFGLDRFQUFDb0I7b0JBQ0dDLFdBQVU7b0JBQ1ZDLEdBQUU7Ozs7Ozs7Ozs7OzBCQUtWLDhEQUFDUDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNPO3dCQUFLUCxXQUFVOzs0QkFBc0JkOzRCQUFNOzs7Ozs7O2tDQUM1Qyw4REFBQ3NCO3dCQUFFUixXQUFVO2tDQUFhakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQztHQTNDU0U7S0FBQUE7QUFnRE0sU0FBU3dCO0lBQ3BCLHFCQUNJLDhEQUFDQztRQUFRVixXQUFVO2tCQUNmLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDVm5CLFlBQVk4QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3BCLDhEQUFDNUI7d0JBRUdILFVBQVU4QixLQUFLOUIsUUFBUTt3QkFDdkJDLE9BQU82QixLQUFLN0IsS0FBSzt3QkFDakJDLE9BQU80QixLQUFLNUIsS0FBSzt1QkFIWjZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQztNQWpCd0JKIiwic291cmNlcyI6WyJEOlxcQWxwaGFiZXQgRGF0YVxccGFuYWNlYVxcc3JjXFxjb21wb25lbnRzXFxhYm91dFxcQ291bnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGNvdW50ZXJEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGVuZFZhbHVlOiA1MDAwLFxyXG4gICAgICAgIGxhYmVsOiAnSGFwcHkgQ2xpZW50cycsXHJcbiAgICAgICAgY29sb3I6ICdmaWxsLXJvc2UtMzAwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZW5kVmFsdWU6IDk1LFxyXG4gICAgICAgIGxhYmVsOiAnU3VjY2VzcyBSYXRlJyxcclxuICAgICAgICBjb2xvcjogJ2ZpbGwtcm9zZS0zMDAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBlbmRWYWx1ZTogMTUsXHJcbiAgICAgICAgbGFiZWw6ICdZZWFycyBFeHBlcmllbmNlJyxcclxuICAgICAgICBjb2xvcjogJ2ZpbGwtcm9zZS0zMDAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBlbmRWYWx1ZTogMjUsXHJcbiAgICAgICAgbGFiZWw6ICdFeHBlcnQgRG9jdG9ycycsXHJcbiAgICAgICAgY29sb3I6ICdmaWxsLXJvc2UtMzAwJyxcclxuICAgIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBDb3VudGVyQ2FyZCh7IGVuZFZhbHVlLCBsYWJlbCwgY29sb3IgfSkge1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMjAwMDsgLy8gMiBzZWNvbmRzXHJcbiAgICAgICAgY29uc3Qgc3RlcHMgPSA1MDtcclxuICAgICAgICBjb25zdCBzdGVwVmFsdWUgPSBlbmRWYWx1ZSAvIHN0ZXBzO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBEdXJhdGlvbiA9IGR1cmF0aW9uIC8gc3RlcHM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGVwKys7XHJcbiAgICAgICAgICAgIHNldENvdW50KE1hdGgubWluKE1hdGgucm91bmQoc3RlcFZhbHVlICogY3VycmVudFN0ZXApLCBlbmRWYWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGVwID49IHN0ZXBzKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHN0ZXBEdXJhdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgIH0sIFtlbmRWYWx1ZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlcjotdHJhbnNsYXRlLXktMiBncm91cCBiZy1uZXV0cmFsLTUwIGR1cmF0aW9uLTUwMCB3LVsyODBweF0gaC01MCBmbGV4IHRleHQtbmV1dHJhbC02MDAgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlIHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICB7LyogQmxvYiBTVkcgQmFja2dyb3VuZCAqL31cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDAgMjAwXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmx1ciB6LTEwIGR1cmF0aW9uLTUwMCBncm91cC1ob3ZlcjpibHVyLW5vbmUgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1ICR7Y29sb3J9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAwIDEwMClcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMzkuNSwtNDkuNkM1NC44LC00My4yLDczLjIsLTM2LjUsNzguMiwtMjQuNkM4My4yLC0xMi43LDc0LjgsNC40LDY5LDIyLjVDNjMuMyw0MC42LDYwLjIsNTkuNiw0OS4xLDY0LjhDMzguMSw3MCwxOSw2MS41LDAuNiw2MC43Qy0xNy45LDU5LjksLTM1LjksNjcsLTQ3LjIsNjEuOUMtNTguNiw1Ni43LC02My40LDM5LjUsLTcwLDIyLjFDLTc2LjYsNC43LC04NC45LC0xMi44LC04MS45LC0yOC4xQy03OSwtNDMuMywtNjQuNiwtNTYuMywtNDkuMSwtNjIuNUMtMzMuNiwtNjguOCwtMTYuOCwtNjguMywtMi4zLC02NS4xQzEyLjEsLTYxLjksMjQuMiwtNTUuOSwzOS41LC00OS42WlwiXHJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDb3VudGVyIENvbnRlbnQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0yMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNnhsXCI+e2NvdW50fSs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57bGFiZWx9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdW50ZXJTZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0xNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlckRhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRlckNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRWYWx1ZT17ZGF0YS5lbmRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtkYXRhLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2RhdGEuY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvdW50ZXJEYXRhIiwiZW5kVmFsdWUiLCJsYWJlbCIsImNvbG9yIiwiQ291bnRlckNhcmQiLCJjb3VudCIsInNldENvdW50IiwiZHVyYXRpb24iLCJzdGVwcyIsInN0ZXBWYWx1ZSIsInN0ZXBEdXJhdGlvbiIsImN1cnJlbnRTdGVwIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzdmciLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwidHJhbnNmb3JtIiwiZCIsInNwYW4iLCJwIiwiQ291bnRlclNlY3Rpb24iLCJzZWN0aW9uIiwibWFwIiwiZGF0YSIsImluZGV4Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/about/Counter.js\n"));

/***/ })

});