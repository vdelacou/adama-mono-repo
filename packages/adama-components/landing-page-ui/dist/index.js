"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  CenteredCTAText: () => CenteredCTAText,
  SectionWrapper: () => SectionWrapper
});
module.exports = __toCommonJS(src_exports);

// src/components/atoms/button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  var _a2;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    __spreadProps(__spreadValues({
      role: "button"
    }, props), {
      className: `${(_a2 = props.className) != null ? _a2 : ""} px-4 py-2.5 font-medium text-sm text-center duration-150`,
      children
    })
  );
};

// src/components/atoms/section-wrapper/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var SectionWrapper = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "section",
  {
    className: `py-16 lg:py-20 ${className != null ? className : ""}`,
    children
  }
);

// src/components/molecules/centered-cta-text/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var CenteredCTAText = ({ title, description }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SectionWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "custom-screen text-center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "max-w-xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "text-gray-800 text-3xl font-semibold sm:text-4xl", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-3 text-gray-600", children: description })
  ] }) }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  CenteredCTAText,
  SectionWrapper
});
