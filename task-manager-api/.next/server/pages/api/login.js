"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("md5");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./middlewares/connectDb.ts":
/*!**********************************!*\
  !*** ./middlewares/connectDb.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDb\": () => (/* binding */ connectDb)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDb = (handler)=>async (req, res)=>{\n        console.log(\"MongoDb readystate\", (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState));\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            return handler(req, res);\n        }\n        const { DB_CONNECTION_STRING  } = process.env;\n        if (!DB_CONNECTION_STRING) {\n            return res.status(500).json({\n                error: \"ENV Database connection n\\xe3o informada\"\n            });\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(DB_CONNECTION_STRING);\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on(\"connected\", ()=>console.log(\"Conectado ao DB\")\n        );\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on(\"error\", (error)=>console.log(\"Ocorreu erro ao conectar no DB\" + error)\n        );\n        return handler(req, res);\n    }\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlcy9jb25uZWN0RGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2dDO0FBR3pCLE1BQU1DLFNBQVMsR0FBRyxDQUFDQyxPQUF3QixHQUM5QyxPQUFPQyxHQUFvQixFQUFFQyxHQUF5QyxHQUFLO1FBRTNFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRU4sMkVBQWtDLENBQUMsQ0FBQztRQUN0RSxJQUFHQSwyRUFBa0MsRUFBQztZQUNsQyxPQUFPRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFFRCxNQUFNLEVBQUNLLG9CQUFvQixHQUFDLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRztRQUMxQyxJQUFHLENBQUNGLG9CQUFvQixFQUFDO1lBQ3JCLE9BQU9MLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUssRUFBRywwQ0FBdUM7YUFBQyxDQUFDLENBQUM7U0FDbkY7UUFFRCxNQUFNZCx1REFBZ0IsQ0FBQ1Msb0JBQW9CLENBQUMsQ0FBQztRQUM3Q1QsNkRBQXNCLENBQUMsV0FBVyxFQUFFLElBQU1LLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO1FBQUEsQ0FBQyxDQUFDO1FBQzFFTiw2REFBc0IsQ0FBQyxPQUFPLEVBQUVjLENBQUFBLEtBQUssR0FBSVQsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUdRLEtBQUssQ0FBQztRQUFBLENBQUMsQ0FBQztRQUVoRyxPQUFPWixPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7S0FDNUI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlcmVuY2lhZG9yLXRhcmVmYXMtODdhb2ovLi9taWRkbGV3YXJlcy9jb25uZWN0RGIudHM/MGM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSwgTmV4dEFwaUhhbmRsZXJ9IGZyb20gJ25leHQnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IERlZmF1bHRSZXNwb25zZU1zZyB9IGZyb20gJy4uL3R5cGVzL0RlZmF1bHRSZXNwb25zZU1zZyc7XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0RGIgPSAoaGFuZGxlciA6IE5leHRBcGlIYW5kbGVyKSA9PiBcbiAgICBhc3luYyAocmVxIDogTmV4dEFwaVJlcXVlc3QsIHJlcyA6IE5leHRBcGlSZXNwb25zZTxEZWZhdWx0UmVzcG9uc2VNc2c+KSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZygnTW9uZ29EYiByZWFkeXN0YXRlJywgbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSk7XG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSl7XG4gICAgICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcbiAgICB9XG5cbiAgICBjb25zdCB7REJfQ09OTkVDVElPTl9TVFJJTkd9ID0gcHJvY2Vzcy5lbnY7XG4gICAgaWYoIURCX0NPTk5FQ1RJT05fU1RSSU5HKXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgOiBcIkVOViBEYXRhYmFzZSBjb25uZWN0aW9uIG7Do28gaW5mb3JtYWRhXCJ9KTtcbiAgICB9XG5cbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KERCX0NPTk5FQ1RJT05fU1RSSU5HKTtcbiAgICBtb25nb29zZS5jb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiBjb25zb2xlLmxvZygnQ29uZWN0YWRvIGFvIERCJykpO1xuICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ2Vycm9yJywgZXJyb3IgPT4gY29uc29sZS5sb2coJ09jb3JyZXUgZXJybyBhbyBjb25lY3RhciBubyBEQicgKyBlcnJvcikpO1xuXG4gICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiREJfQ09OTkVDVElPTl9TVFJJTkciLCJwcm9jZXNzIiwiZW52Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./middlewares/connectDb.ts\n");

/***/ }),

/***/ "(api)/./models/UserModel.ts":
/*!*****************************!*\
  !*** ./models/UserModel.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserModel\": () => (/* binding */ UserModel)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n});\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlck1vZGVsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUUxQyxNQUFNRSxVQUFVLEdBQUcsSUFBSUQsNENBQU0sQ0FBQztJQUMxQkUsSUFBSSxFQUFHO1FBQUNDLElBQUksRUFBR0MsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFDO0lBQ3RDQyxLQUFLLEVBQUc7UUFBQ0gsSUFBSSxFQUFHQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUM7SUFDdkNFLFFBQVEsRUFBRztRQUFDSixJQUFJLEVBQUdDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBQztDQUM3QyxDQUFDO0FBRUssTUFBTUcsU0FBUyxHQUFJVCw4REFBcUIsSUFDeENBLHFEQUFjLENBQUMsT0FBTyxFQUFFRSxVQUFVLENBQUMsQ0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlcmVuY2lhZG9yLXRhcmVmYXMtODdhb2ovLi9tb2RlbHMvVXNlck1vZGVsLnRzPzA4NjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7U2NoZW1hfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBuYW1lIDoge3R5cGUgOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcbiAgICBlbWFpbCA6IHt0eXBlIDogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXG4gICAgcGFzc3dvcmQgOiB7dHlwZSA6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBVc2VyTW9kZWwgPSAobW9uZ29vc2UubW9kZWxzLnVzZXJzIFxuICAgIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VycycsIFVzZXJTY2hlbWEpKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJVc2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwicGFzc3dvcmQiLCJVc2VyTW9kZWwiLCJtb2RlbHMiLCJ1c2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/UserModel.ts\n");

/***/ }),

/***/ "(api)/./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5 */ \"md5\");\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middlewares_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middlewares/connectDb */ \"(api)/./middlewares/connectDb.ts\");\n/* harmony import */ var _models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserModel */ \"(api)/./models/UserModel.ts\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst loginEndpoint = async (req, res)=>{\n    const { MY_SECRET_KEY  } = process.env;\n    if (!MY_SECRET_KEY) {\n        return res.status(500).json({\n            error: \"ENV Chave JWT n\\xe3o informada\"\n        });\n    }\n    if (req.method === \"POST\") {\n        const body = req.body;\n        if (!body || !body.login || !body.password) {\n            return res.status(400).json({\n                error: \"Favor informar usu\\xe1rio e senha\"\n            });\n        }\n        const usersFound = await _models_UserModel__WEBPACK_IMPORTED_MODULE_2__.UserModel.find({\n            email: body.login,\n            password: md5__WEBPACK_IMPORTED_MODULE_0___default()(body.password)\n        });\n        if (usersFound && usersFound.length > 0) {\n            const user = usersFound[0];\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n                _id: user._id\n            }, MY_SECRET_KEY);\n            const result = {\n                name: user.name,\n                email: user.email,\n                token\n            };\n            return res.status(200).json(result);\n        }\n        return res.status(400).json({\n            error: \"Usu\\xe1rio ou senha n\\xe3o encontrado\"\n        });\n    }\n    return res.status(405).json({\n        error: \"Metodo infomado n\\xe3o \\xe9 valido\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_connectDb__WEBPACK_IMPORTED_MODULE_1__.connectDb)(loginEndpoint));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQjtBQUVrQztBQUNMO0FBR3BCO0FBRy9CLE1BQU1JLGFBQWEsR0FBRyxPQUFNQyxHQUFvQixFQUM1Q0MsR0FBeUQsR0FBSztJQUU5RCxNQUFNLEVBQUNDLGFBQWEsR0FBQyxHQUFHQyxPQUFPLENBQUNDLEdBQUc7SUFDbkMsSUFBRyxDQUFDRixhQUFhLEVBQUM7UUFDZCxPQUFPRCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRyxnQ0FBNkI7U0FBRSxDQUFDLENBQUM7S0FDekU7SUFHRixJQUFHUCxHQUFHLENBQUNRLE1BQU0sS0FBSyxNQUFNLEVBQUM7UUFDckIsTUFBTUMsSUFBSSxHQUFHVCxHQUFHLENBQUNTLElBQUk7UUFDckIsSUFBRyxDQUFDQSxJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxLQUFLLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxRQUFRLEVBQUM7WUFDdEMsT0FBT1YsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFHLG1DQUFnQzthQUFFLENBQUMsQ0FBQztTQUM1RTtRQUVGLE1BQU1LLFVBQVUsR0FBRyxNQUFNZiw2REFBYyxDQUFDO1lBQUVpQixLQUFLLEVBQUdMLElBQUksQ0FBQ0MsS0FBSztZQUFFQyxRQUFRLEVBQUdoQiwwQ0FBRyxDQUFDYyxJQUFJLENBQUNFLFFBQVEsQ0FBQztTQUFDLENBQUM7UUFDN0YsSUFBSUMsVUFBVSxJQUFJQSxVQUFVLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckMsTUFBTUMsSUFBSSxHQUFHSixVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU1LLEtBQUssR0FBR25CLHdEQUFRLENBQUM7Z0JBQUNxQixHQUFHLEVBQUdILElBQUksQ0FBQ0csR0FBRzthQUFDLEVBQUVqQixhQUFhLENBQUM7WUFFdkQsTUFBTWtCLE1BQU0sR0FBRztnQkFDWEMsSUFBSSxFQUFHTCxJQUFJLENBQUNLLElBQUk7Z0JBQ2hCUCxLQUFLLEVBQUdFLElBQUksQ0FBQ0YsS0FBSztnQkFDbEJHLEtBQUs7YUFDUjtZQUVELE9BQU9oQixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDYyxNQUFNLENBQUMsQ0FBQztTQUN2QztRQUVELE9BQU9uQixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRyx1Q0FBaUM7U0FBRyxDQUFDLENBQUM7S0FDN0U7SUFFSCxPQUFPTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLEtBQUssRUFBRyxvQ0FBOEI7S0FBQyxDQUFDLENBQUM7Q0FDMUU7QUFFRCxpRUFBZVgsaUVBQVMsQ0FBQ0csYUFBYSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXJlbmNpYWRvci10YXJlZmFzLTg3YW9qLy4vcGFnZXMvYXBpL2xvZ2luLnRzP2MxMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xuaW1wb3J0IHR5cGUge05leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2V9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgY29ubmVjdERiIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMvY29ubmVjdERiJztcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgRGVmYXVsdFJlc3BvbnNlTXNnIH0gZnJvbSAnLi4vLi4vdHlwZXMvRGVmYXVsdFJlc3BvbnNlTXNnJztcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4uLy4uL3R5cGVzL0xvZ2luUmVxdWVzdCc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vdHlwZXMvTG9naW5SZXNwb25zZSc7XG5cbmNvbnN0IGxvZ2luRW5kcG9pbnQgPSBhc3luYyhyZXEgOiBOZXh0QXBpUmVxdWVzdCwgXG4gICAgcmVzIDogTmV4dEFwaVJlc3BvbnNlPERlZmF1bHRSZXNwb25zZU1zZyB8IExvZ2luUmVzcG9uc2U+KSA9PiB7XG5cbiAgICBjb25zdCB7TVlfU0VDUkVUX0tFWX0gPSBwcm9jZXNzLmVudjtcbiAgICBpZighTVlfU0VDUkVUX0tFWSl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIDogXCJFTlYgQ2hhdmUgSldUIG7Do28gaW5mb3JtYWRhXCJ9KTtcbiAgICB9XG4gICAgXG5cbiAgICBpZihyZXEubWV0aG9kID09PSAnUE9TVCcpe1xuICAgICAgICBjb25zdCBib2R5ID0gcmVxLmJvZHkgYXMgTG9naW5SZXF1ZXN0O1xuICAgICAgICBpZighYm9keSB8fCAhYm9keS5sb2dpbiB8fCAhYm9keS5wYXNzd29yZCl7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvciA6ICdGYXZvciBpbmZvcm1hciB1c3XDoXJpbyBlIHNlbmhhJ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlcnNGb3VuZCA9IGF3YWl0IFVzZXJNb2RlbC5maW5kKHsgZW1haWwgOiBib2R5LmxvZ2luLCBwYXNzd29yZCA6IG1kNShib2R5LnBhc3N3b3JkKX0pO1xuICAgICAgICBpZiggdXNlcnNGb3VuZCAmJiB1c2Vyc0ZvdW5kLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vyc0ZvdW5kWzBdO1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7X2lkIDogdXNlci5faWR9LCBNWV9TRUNSRVRfS0VZKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIG5hbWUgOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwgOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3IgOiAnVXN1w6FyaW8gb3Ugc2VuaGEgbsOjbyBlbmNvbnRyYWRvJ30pO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yIDogJ01ldG9kbyBpbmZvbWFkbyBuw6NvIMOpIHZhbGlkbyd9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERiKGxvZ2luRW5kcG9pbnQpOyJdLCJuYW1lcyI6WyJtZDUiLCJjb25uZWN0RGIiLCJVc2VyTW9kZWwiLCJqd3QiLCJsb2dpbkVuZHBvaW50IiwicmVxIiwicmVzIiwiTVlfU0VDUkVUX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXRob2QiLCJib2R5IiwibG9naW4iLCJwYXNzd29yZCIsInVzZXJzRm91bmQiLCJmaW5kIiwiZW1haWwiLCJsZW5ndGgiLCJ1c2VyIiwidG9rZW4iLCJzaWduIiwiX2lkIiwicmVzdWx0IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.ts"));
module.exports = __webpack_exports__;

})();