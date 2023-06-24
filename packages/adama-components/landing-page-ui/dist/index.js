"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Brand: () => Brand,
  Button: () => Button,
  CenteredCTAText: () => CenteredCTAText,
  DesktopStaticSidebar: () => DesktopStaticSidebar,
  NavHeader: () => NavHeader,
  SectionWrapper: () => SectionWrapper,
  classNames: () => classNames
});
module.exports = __toCommonJS(src_exports);

// src/components/atoms/brand/index.tsx
var import_image = __toESM(require("next/image"));
var import_jsx_runtime = require("react/jsx-runtime");
var Brand = ({ src, alt, width, height }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_image.default, { src, alt, width: width != null ? width : 86, height: height != null ? height : 48, priority: true });

// src/components/atoms/button/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  var _a2;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", __spreadProps(__spreadValues({ role: "button" }, props), { className: `${(_a2 = props.className) != null ? _a2 : ""} px-4 py-2.5 text-center text-sm font-medium duration-150`, children }));
};

// src/components/atoms/section-wrapper/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var SectionWrapper = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("section", { className: `py-16 lg:py-20 ${className != null ? className : ""}`, children });

// src/components/molecules/centered-cta-text/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var CenteredCTAText = ({ title, description }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SectionWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mx-auto max-w-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-3xl font-semibold text-gray-800 sm:text-4xl", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "mt-3 text-gray-600", children: description })
  ] }) }) });
};

// src/utils/class_names/index.ts
var classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// src/components/molecules/desktop-static-sidebar/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Documents", href: "#", current: false },
  { name: "Reports", href: "#", current: false }
];
var DesktopStaticSidebar = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex h-16 shrink-0 items-center" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "a",
        {
          href: item.href,
          className: classNames(
            item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
          ),
          children: item.name
        }
      ) }, item.name)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { className: "-mx-6 mt-auto", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("a", { href: "#", className: "flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "sr-only", children: "Your profile" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { "aria-hidden": "true", children: "Tom Cook" })
      ] }) })
    ] }) })
  ] }) });
};

// src/components/molecules/nav-header/index.tsx
var import_link = __toESM(require("next/link"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var NavHeader = ({
  onClick,
  state,
  // menuBtnEl,
  brandProps
}) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-center justify-between py-5 md:block", children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_link.default, { href: "/", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Brand, __spreadValues({}, brandProps)) }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "button",
    {
      role: "button",
      className: "text-gray-500 hover:text-gray-800",
      onClick: () => onClick(),
      children: state ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          clipRule: "evenodd"
        }
      ) }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }) })
    }
  ) })
] });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Brand,
  Button,
  CenteredCTAText,
  DesktopStaticSidebar,
  NavHeader,
  SectionWrapper,
  classNames
});
