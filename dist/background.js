/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/background/chrome/background.ts ***!
  \*********************************************/
/// <reference types="chrome"/>
chrome.runtime.onInstalled.addListener(function () {
    // Make extension work on all pages
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [new chrome.declarativeContent.PageStateMatcher({})],
                actions: [new chrome.declarativeContent.ShowPageAction()],
            },
        ]);
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItZXh0ZW5zaW9uLXN2ZWx0ZS1ib2lsZXJwbGF0ZS8uL3NyYy9iYWNrZ3JvdW5kL2Nocm9tZS9iYWNrZ3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQStCO0FBRS9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztJQUNyQyxtQ0FBbUM7SUFDbkMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1FBQzdELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQy9DO2dCQUNFLFVBQVUsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUMxRDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY2hyb21lXCIvPlxuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gIC8vIE1ha2UgZXh0ZW5zaW9uIHdvcmsgb24gYWxsIHBhZ2VzXG4gIGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQub25QYWdlQ2hhbmdlZC5yZW1vdmVSdWxlcyh1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgICBjaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50Lm9uUGFnZUNoYW5nZWQuYWRkUnVsZXMoW1xuICAgICAge1xuICAgICAgICBjb25kaXRpb25zOiBbbmV3IGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQuUGFnZVN0YXRlTWF0Y2hlcih7fSldLFxuICAgICAgICBhY3Rpb25zOiBbbmV3IGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQuU2hvd1BhZ2VBY3Rpb24oKV0sXG4gICAgICB9LFxuICAgIF0pO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==