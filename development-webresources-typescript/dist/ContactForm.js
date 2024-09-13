/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountModel = void 0;
class AccountModel {
    static getFields() {
        //@ts-ignore
        return Object.values(AccountModel.Fields);
    }
}
exports.AccountModel = AccountModel;
AccountModel.EntityName = "account";
AccountModel.Fields = {
    AccountId: "accountid",
    Name: "name",
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Account_1 = __webpack_require__(1);
var AccountForm;
(function (AccountForm) {
    function onLoad(context) {
        const formContext = context.getFormContext();
        formContext.getAttribute(Account_1.AccountModel.Fields.Name).setValue("Default Account Name");
    }
    AccountForm.onLoad = onLoad;
    function onSave(context) {
        const formContext = context.getFormContext();
        const name = formContext.getAttribute(Account_1.AccountModel.Fields.Name).getValue();
        if (!name) {
            //@ts-ignore
            context.getEventArgs().preventDefault();
            alert("Account Name is required.");
        }
    }
    AccountForm.onSave = onSave;
})(AccountForm || (AccountForm = {}));
// Expose functions to the global scope for Dynamics 365 to call
window = AccountForm;

})();

/******/ })()
;