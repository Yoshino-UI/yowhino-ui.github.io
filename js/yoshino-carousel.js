(window.webpackJsonp=window.webpackJsonp||[]).push([["yoshino-carousel"],{"./docs/pages/components/Carousel/api.tsx":
/*!************************************************!*\
  !*** ./docs/pages/components/Carousel/api.tsx ***!
  \************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    {\n        title: 'API',\n        json: [\n            {\n                props: 'autoplay',\n                intro: '自动滚动',\n                type: 'boolean',\n                defaultValue: 'true',\n            },\n            {\n                props: 'interval',\n                intro: '切换时间间隔，单位ms',\n                type: 'number',\n                defaultValue: '3000',\n            },\n            {\n                props: 'shwoDots',\n                intro: '是否显示指示点',\n                type: 'boolean',\n                defaultValue: 'true',\n            },\n            {\n                props: 'vertical',\n                intro: '垂直展示',\n                type: 'boolean',\n                defaultValue: 'false',\n            },\n            {\n                props: 'showControl',\n                intro: '是否轮播控制器',\n                type: 'boolean',\n                defaultValue: 'true',\n            },\n            {\n                props: 'preIcon',\n                intro: '自定义往前翻的icon',\n                type: 'ReactNode',\n                defaultValue: '-',\n            },\n            {\n                props: 'nextIcon',\n                intro: '自定义往后翻的icon',\n                type: 'ReactNode',\n                defaultValue: '-',\n            },\n        ]\n    },\n    {\n        title: 'API - 操作方法',\n        json: [\n            {\n                props: 'goto',\n                intro: '跳转到指定页',\n                type: '(index: number) => void',\n                defaultValue: '-',\n            },\n            {\n                props: 'pre',\n                intro: '跳转前一页',\n                type: '() => void',\n                defaultValue: '-',\n            },\n            {\n                props: 'next',\n                intro: '跳转到下一页',\n                type: '() => void',\n                defaultValue: '-',\n            }\n        ]\n    },\n]);\n\n\n//# sourceURL=webpack:///./docs/pages/components/Carousel/api.tsx?")},"./docs/pages/components/Carousel/demo/carouselCustom.md":
/*!***************************************************************!*\
  !*** ./docs/pages/components/Carousel/demo/carouselCustom.md ***!
  \***************************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "#### 垂直方向\\n垂直方向展示并关闭控制器"\n\n//# sourceURL=webpack:///./docs/pages/components/Carousel/demo/carouselCustom.md?')},"./docs/pages/components/Carousel/demo/carouselCustom.tsx":
/*!****************************************************************!*\
  !*** ./docs/pages/components/Carousel/demo/carouselCustom.tsx ***!
  \****************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _yoshino_components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yoshino/components/ */ "./components/index.tsx");\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n    var img = [\n        \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=ee41677311bd86256d22e8ea14e9d534&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F03%2F23%2F7cd48ff3f1eac8b803aa086fc2f505f4.jpg\',\n        \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=c267c059b1a11c109ed642b87b440f5e&imgtype=0&src=http%3A%2F%2Fimg5.xiazaizhijia.com%2Fwalls%2F20150813%2F1440x900_9089db03e171ff2.jpg\',\n        \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=a66cf662a460e6a1f931ec9ed1485b4f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f16659df31b3a8012044639768e7.png%402o.jpg\',\n        \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250537&di=2707a57edacd9b981dbdb17a38b7f203&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F038fbce55dea4370000015995570a1d.jpg\',\n        \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250536&di=443a0d8733ae1b731026f27fbb59fb43&imgtype=0&src=http%3A%2F%2Ftravel.cnr.cn%2Flist%2F20150320%2FW020150320422759523038.jpg\',\n    ];\n    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Carousel"], { vertical: true, style: { textAlign: \'center\' }, showControl: false }, img.map(function (item, key) {\n            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: item, style: { width: \'100%\', height: \'100%\' }, key: key }));\n        }))));\n});\n\n\n//# sourceURL=webpack:///./docs/pages/components/Carousel/demo/carouselCustom.tsx?')},"./docs/pages/components/Carousel/demo/carouselDemo.md":
/*!*************************************************************!*\
  !*** ./docs/pages/components/Carousel/demo/carouselDemo.md ***!
  \*************************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "#### 基本使用"\n\n//# sourceURL=webpack:///./docs/pages/components/Carousel/demo/carouselDemo.md?')},"./docs/pages/components/Carousel/demo/carouselDemo.tsx":
/*!**************************************************************!*\
  !*** ./docs/pages/components/Carousel/demo/carouselDemo.tsx ***!
  \**************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _yoshino_components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yoshino/components/ */ "./components/index.tsx");\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n    var img = [\n        \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=ee41677311bd86256d22e8ea14e9d534&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F03%2F23%2F7cd48ff3f1eac8b803aa086fc2f505f4.jpg\',\n        \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=c267c059b1a11c109ed642b87b440f5e&imgtype=0&src=http%3A%2F%2Fimg5.xiazaizhijia.com%2Fwalls%2F20150813%2F1440x900_9089db03e171ff2.jpg\',\n        \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=a66cf662a460e6a1f931ec9ed1485b4f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f16659df31b3a8012044639768e7.png%402o.jpg\',\n        \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250537&di=2707a57edacd9b981dbdb17a38b7f203&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F038fbce55dea4370000015995570a1d.jpg\',\n        \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250536&di=443a0d8733ae1b731026f27fbb59fb43&imgtype=0&src=http%3A%2F%2Ftravel.cnr.cn%2Flist%2F20150320%2FW020150320422759523038.jpg\',\n    ];\n    var dom;\n    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Button"], { style: { marginBottom: 20 }, type: \'primary\', onClick: function () { return dom.goto(Math.ceil(Math.random() * 4)); } }, "\\u968F\\u673A\\u8C03\\u5230\\u67D0\\u9875"),\n        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_yoshino_components___WEBPACK_IMPORTED_MODULE_1__["Carousel"], { style: { textAlign: \'center\' }, ref: function (v) { return dom = v; } }, img.map(function (item, key) {\n            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: item, style: { width: \'100%\', height: \'100%\' }, key: key }));\n        }))));\n});\n\n\n//# sourceURL=webpack:///./docs/pages/components/Carousel/demo/carouselDemo.tsx?')},"./docs/pages/components/Carousel/index.less":
/*!***************************************************!*\
  !*** ./docs/pages/components/Carousel/index.less ***!
  \***************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./docs/pages/components/Carousel/index.less");\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {"hmr":true}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(true) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./docs/pages/components/Carousel/index.less", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {\n\t\t\tvar newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./docs/pages/components/Carousel/index.less");\n\t\t\tif(typeof newContent === \'string\') newContent = [[module.i, newContent, \'\']];\n\t\t\tupdate(newContent);\n\t\t})(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n    if(true) {\n      // 1548661972373\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});\n      module.hot.dispose(cssReload);\n    }\n  \n\n//# sourceURL=webpack:///./docs/pages/components/Carousel/index.less?')},"./docs/pages/components/Carousel/index.md":
/*!*************************************************!*\
  !*** ./docs/pages/components/Carousel/index.md ***!
  \*************************************************/
/*! no static exports found */function(module,exports){eval('module.exports = "## Carousel \\n一般用于展示网站上多张图片。\\n\\n`Carousel`在设计的时候使用了享元模式，浏览器中只同时渲染三个节点，提高流畅性。\\n\\n## 代码演示\\n"\n\n//# sourceURL=webpack:///./docs/pages/components/Carousel/index.md?')},"./docs/pages/components/Carousel/index.tsx":
/*!**************************************************!*\
  !*** ./docs/pages/components/Carousel/index.tsx ***!
  \**************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.md */ "./docs/pages/components/Carousel/index.md");\n/* harmony import */ var _index_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _docs_components_Markdown___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @docs/components/Markdown/ */ "./docs/components/Markdown/index.tsx");\n/* harmony import */ var _docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @docs/components/CodeBox/ */ "./docs/components/CodeBox/index.tsx");\n/* harmony import */ var _docs_components_ApiBox___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @docs/components/ApiBox/ */ "./docs/components/ApiBox/index.tsx");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./docs/pages/components/Carousel/api.tsx");\n/* harmony import */ var _demo_carouselDemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/carouselDemo */ "./docs/pages/components/Carousel/demo/carouselDemo.tsx");\n/* harmony import */ var _demo_carouselDemo_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/carouselDemo.md */ "./docs/pages/components/Carousel/demo/carouselDemo.md");\n/* harmony import */ var _demo_carouselDemo_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_demo_carouselDemo_md__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _demo_carouselCustom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo/carouselCustom */ "./docs/pages/components/Carousel/demo/carouselCustom.tsx");\n/* harmony import */ var _demo_carouselCustom_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo/carouselCustom.md */ "./docs/pages/components/Carousel/demo/carouselCustom.md");\n/* harmony import */ var _demo_carouselCustom_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_demo_carouselCustom_md__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./docs/pages/components/Carousel/index.less");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\nvar carouselDemoCode = __webpack_require__(/*! raw-loader!./demo/carouselDemo */ "./node_modules/raw-loader/index.js!./docs/pages/components/Carousel/demo/carouselDemo.tsx");\n\n\nvar carouselCustomCode = __webpack_require__(/*! raw-loader!./demo/carouselCustom */ "./node_modules/raw-loader/index.js!./docs/pages/components/Carousel/demo/carouselCustom.tsx");\n\nvar CarouselPage = /** @class */ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CarouselPage, _super);\n    function CarouselPage() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    CarouselPage.prototype.render = function () {\n        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_Markdown___WEBPACK_IMPORTED_MODULE_3__["default"], { text: _index_md__WEBPACK_IMPORTED_MODULE_2__ }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__["default"], { text: _demo_carouselDemo_md__WEBPACK_IMPORTED_MODULE_8__, demo: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_demo_carouselDemo__WEBPACK_IMPORTED_MODULE_7__["default"], null), code: carouselDemoCode }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_CodeBox___WEBPACK_IMPORTED_MODULE_4__["default"], { text: _demo_carouselCustom_md__WEBPACK_IMPORTED_MODULE_10__, demo: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_demo_carouselCustom__WEBPACK_IMPORTED_MODULE_9__["default"], null), code: carouselCustomCode }),\n            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_docs_components_ApiBox___WEBPACK_IMPORTED_MODULE_5__["default"], { api: _api__WEBPACK_IMPORTED_MODULE_6__["default"] })));\n    };\n    return CarouselPage;\n}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));\n/* harmony default export */ __webpack_exports__["default"] = (CarouselPage);\n\n\n//# sourceURL=webpack:///./docs/pages/components/Carousel/index.tsx?')},"./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./docs/pages/components/Carousel/index.less":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js!./docs/pages/components/Carousel/index.less ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);\n// imports\n\n\n// module\nexports.push([module.i, "", ""]);\n\n// exports\n\n\n//# sourceURL=webpack:///./docs/pages/components/Carousel/index.less?./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js')},"./node_modules/raw-loader/index.js!./docs/pages/components/Carousel/demo/carouselCustom.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./docs/pages/components/Carousel/demo/carouselCustom.tsx ***!
  \******************************************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = \"import * as React from 'react';\\nimport { Carousel } from '@yoshino/components/';\\n\\nexport default function() {\\n  const img = [\\n    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=ee41677311bd86256d22e8ea14e9d534&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F03%2F23%2F7cd48ff3f1eac8b803aa086fc2f505f4.jpg',\\n    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=c267c059b1a11c109ed642b87b440f5e&imgtype=0&src=http%3A%2F%2Fimg5.xiazaizhijia.com%2Fwalls%2F20150813%2F1440x900_9089db03e171ff2.jpg',\\n    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=a66cf662a460e6a1f931ec9ed1485b4f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f16659df31b3a8012044639768e7.png%402o.jpg',\\n    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250537&di=2707a57edacd9b981dbdb17a38b7f203&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F038fbce55dea4370000015995570a1d.jpg',\\n    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250536&di=443a0d8733ae1b731026f27fbb59fb43&imgtype=0&src=http%3A%2F%2Ftravel.cnr.cn%2Flist%2F20150320%2FW020150320422759523038.jpg',\\n  ];\\n\\n  return (\\n    <div>\\n      <Carousel\\n        vertical\\n        style={{textAlign: 'center'}}\\n        showControl={false}\\n      >\\n        {\\n          img.map((item, key) => {\\n            return (\\n              <img src={item} style={{width: '100%', height: '100%'}} key={key}/>\\n            );\\n          })\\n        }\\n      </Carousel>\\n    </div>\\n  );\\n}\\n\"\n\n//# sourceURL=webpack:///./docs/pages/components/Carousel/demo/carouselCustom.tsx?./node_modules/raw-loader")},"./node_modules/raw-loader/index.js!./docs/pages/components/Carousel/demo/carouselDemo.tsx":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./docs/pages/components/Carousel/demo/carouselDemo.tsx ***!
  \****************************************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = \"import * as React from 'react';\\nimport { Carousel, Button } from '@yoshino/components/';\\n\\nexport default function() {\\n  const img = [\\n    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=ee41677311bd86256d22e8ea14e9d534&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F03%2F23%2F7cd48ff3f1eac8b803aa086fc2f505f4.jpg',\\n    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=c267c059b1a11c109ed642b87b440f5e&imgtype=0&src=http%3A%2F%2Fimg5.xiazaizhijia.com%2Fwalls%2F20150813%2F1440x900_9089db03e171ff2.jpg',\\n    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250539&di=a66cf662a460e6a1f931ec9ed1485b4f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f16659df31b3a8012044639768e7.png%402o.jpg',\\n    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250537&di=2707a57edacd9b981dbdb17a38b7f203&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F038fbce55dea4370000015995570a1d.jpg',\\n    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534233250536&di=443a0d8733ae1b731026f27fbb59fb43&imgtype=0&src=http%3A%2F%2Ftravel.cnr.cn%2Flist%2F20150320%2FW020150320422759523038.jpg',\\n  ];\\n\\n  let dom: Carousel;\\n\\n  return (\\n    <div>\\n      <Button\\n        style={{marginBottom: 20}}\\n        type='primary'\\n        onClick={() => dom.goto(Math.ceil(Math.random() * 4))}\\n      >\\n        随机调到某页\\n      </Button>\\n      <Carousel\\n        style={{textAlign: 'center'}}\\n        ref={(v: Carousel) => dom = v}\\n      >\\n        {\\n          img.map((item, key) => {\\n            return (\\n              <img src={item} style={{width: '100%', height: '100%'}} key={key}/>\\n            );\\n          })\\n        }\\n      </Carousel>\\n    </div>\\n  );\\n}\\n\"\n\n//# sourceURL=webpack:///./docs/pages/components/Carousel/demo/carouselDemo.tsx?./node_modules/raw-loader")}}]);