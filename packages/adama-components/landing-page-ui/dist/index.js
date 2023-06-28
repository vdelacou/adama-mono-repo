"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
  CenteredCTAText: () => CenteredCTAText,
  Hero: () => Hero,
  NavBar: () => NavBar,
  NavHeader: () => NavHeader,
  NavLink: () => NavLink,
  SectionWrapper: () => SectionWrapper,
  classNames: () => classNames
});
module.exports = __toCommonJS(src_exports);

// src/components/atoms/brand/index.tsx
var import_image = __toESM(require("next/image"));
var import_jsx_runtime = require("react/jsx-runtime");
var Brand = ({ src, alt, width, height }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_image.default, { src, alt, width: width != null ? width : 86, height: height != null ? height : 48, priority: true });

// src/components/atoms/nav-link/index.tsx
var import_link = __toESM(require("next/link"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var NavLink = ({ children, href, className, scroll }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href, className: `rounded-full px-4 py-2.5 text-center duration-150 ${className != null ? className : ""}`, scroll: scroll ? scroll : true, children });

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

// src/components/atoms/gradient-wrapper/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var GradientWrapper = ({ children, className, wrapperClassName }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: `relative py-28 ${className || ""}`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      className: `absolute top-12 m-auto h-[250px] max-w-3xl blur-[130px] ${wrapperClassName || ""}`,
      style: {
        background: "linear-gradient(108.49deg, rgba(152, 103, 240, 0.24) 23.1%, rgba(237, 78, 80, 0.06) 62.53%)"
      }
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "relative", children })
] });

// src/components/molecules/hero/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Hero = ({ title, description, cta1, cta2 }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(GradientWrapper, { wrapperClassName: "inset-0", className: "mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mx-auto max-w-4xl space-y-5 text-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("h1", { className: "mx-auto text-4xl font-extrabold text-gray-800 sm:text-6xl", children: [
    title.left,
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: " bg-gradient-to-r from-[#9867F0] to-[#ED4E50] bg-clip-text text-transparent", children: title.withGradient }),
    " ",
    title.right
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "mx-auto max-w-xl", children: description }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-center justify-center gap-x-3 text-sm font-medium", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(NavLink, { href: cta1.href, className: "flex items-center gap-x-2 bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 ", children: [
      cta1.name,
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
          clipRule: "evenodd"
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(NavLink, { href: cta2.href, className: "flex items-center gap-x-2 text-gray-700 hover:text-gray-900", scroll: false, children: [
      cta2.name,
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
          clipRule: "evenodd"
        }
      ) })
    ] })
  ] })
] }) }) });

// src/components/molecules/nav-header/index.tsx
var import_link2 = __toESM(require("next/link"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var NavHeader = ({ mobileMenuButtonOnClick, open, brandProps }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center justify-between py-5 md:block", children: [
  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_link2.default, { href: "/", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Brand, __spreadValues({}, brandProps)) }),
  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { role: "button", className: "text-gray-500 hover:text-gray-800", onClick: () => mobileMenuButtonOnClick(), children: open ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      clipRule: "evenodd"
    }
  ) }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }) }) }) })
] });

// src/components/organisms/nav-bar/index.tsx
var import_link3 = __toESM(require("next/link"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var NavBar = ({ navLinkProps, navHeaderProps, authProps }) => {
  const { mobileMenuButtonOnClick, open, brandProps } = navHeaderProps;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("header", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mx-auto max-w-screen-xl px-4 md:hidden md:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(NavHeader, { open, mobileMenuButtonOnClick, brandProps }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("nav", { className: `bg-white pb-5 md:static md:block md:text-sm ${open ? "absolute inset-x-4 top-2 z-20 rounded-xl border shadow-lg md:border-none md:shadow-none" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mx-auto max-w-screen-xl items-center gap-x-20 px-4 md:flex md:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(NavHeader, { open, mobileMenuButtonOnClick, brandProps }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: `mt-8 flex-1 items-center text-gray-600 md:mt-0 md:flex md:font-medium ${open ? "block" : "hidden"} `, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("ul", { className: "items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0", children: navLinkProps.map((item) => {
          return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "hover:text-gray-900", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_link3.default, { href: item.href, className: "block", scroll: false, children: item.name }) }, item.name);
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mt-6 flex-1 items-center justify-end gap-x-6 space-y-6 md:mt-0 md:flex md:space-y-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_link3.default, { href: authProps.signIn.href, className: "block hover:text-gray-900", children: authProps.signIn.name }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            NavLink,
            {
              href: authProps.signUp.href,
              className: "flex items-center justify-center gap-x-1 bg-gray-800 text-sm font-medium text-white hover:bg-gray-600 active:bg-gray-900 md:inline-flex",
              children: [
                authProps.signUp.name,
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                    clipRule: "evenodd"
                  }
                ) })
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
};

// src/utils/class_names/index.ts
var classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Brand,
  CenteredCTAText,
  Hero,
  NavBar,
  NavHeader,
  NavLink,
  SectionWrapper,
  classNames
});
