/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./react-client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./react-client/src/index.jsx":
/*!************************************!*\
  !*** ./react-client/src/index.jsx ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/user01/Desktop/git_tutorial/work/mvp-starter/react-client/src/index.jsx: Unexpected token (127:6)\\n\\n\\u001b[0m \\u001b[90m 125 | \\u001b[39m  render () {\\u001b[0m\\n\\u001b[0m \\u001b[90m 126 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 127 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m'app-container'\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 128 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mimg\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m'title'\\u001b[39m src\\u001b[33m=\\u001b[39m\\u001b[32m\\\"logo.png\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mimg\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 129 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"container\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 130 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33mIngredientList\\u001b[39m onItemChange\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mitemChange\\u001b[33m.\\u001b[39mbind(\\u001b[36mthis\\u001b[39m)}\\u001b[0m\\n    at Parser._raise (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:745:17)\\n    at Parser.raiseWithData (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:738:17)\\n    at Parser.raise (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:732:17)\\n    at Parser.unexpected (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:8806:16)\\n    at Parser.parseExprAtom (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:10129:20)\\n    at Parser.parseExprSubscripts (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:9655:23)\\n    at Parser.parseMaybeUnary (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:9635:21)\\n    at Parser.parseExprOps (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:9505:23)\\n    at Parser.parseMaybeConditional (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:9478:23)\\n    at Parser.parseMaybeAssign (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:9433:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:10266:28)\\n    at Parser.parseExprAtom (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:10006:21)\\n    at Parser.parseExprSubscripts (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:9655:23)\\n    at Parser.parseMaybeUnary (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:9635:21)\\n    at Parser.parseExprOps (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:9505:23)\\n    at Parser.parseMaybeConditional (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:9478:23)\\n    at Parser.parseMaybeAssign (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:9433:21)\\n    at Parser.parseExpression (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:9385:23)\\n    at Parser.parseReturnStatement (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:11522:28)\\n    at Parser.parseStatementContent (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:11203:21)\\n    at Parser.parseStatement (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:11155:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:11730:25)\\n    at Parser.parseBlockBody (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:11716:10)\\n    at Parser.parseBlock (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:11700:10)\\n    at Parser.parseFunctionBody (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:10707:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:10690:10)\\n    at Parser.parseMethod (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:10652:10)\\n    at Parser.pushClassMethod (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:12155:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:12072:12)\\n    at Parser.parseClassMember (/Users/user01/Desktop/git_tutorial/work/mvp-starter/node_modules/@babel/parser/lib/index.js:12014:10)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./react-client/src/index.jsx\n");

/***/ })

/******/ });