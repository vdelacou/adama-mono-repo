var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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

// src/components/atoms/brand/index.tsx
import Image from "next/image";
import { jsx } from "react/jsx-runtime";
var Brand = ({ src, alt, width, height }) => /* @__PURE__ */ jsx(Image, { src, alt, width: width != null ? width : 86, height: height != null ? height : 48, priority: true });

// src/components/atoms/button/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Button = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  var _a2;
  return /* @__PURE__ */ jsx2("button", __spreadProps(__spreadValues({ role: "button" }, props), { className: `${(_a2 = props.className) != null ? _a2 : ""} px-4 py-2.5 text-center text-sm font-medium duration-150`, children }));
};

// src/components/atoms/section-wrapper/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var SectionWrapper = ({ children, className }) => /* @__PURE__ */ jsx3("section", { className: `py-16 lg:py-20 ${className != null ? className : ""}`, children });

// src/components/molecules/centered-cta-text/index.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var CenteredCTAText = ({ title, description }) => {
  return /* @__PURE__ */ jsx4(SectionWrapper, { children: /* @__PURE__ */ jsx4("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-xl", children: [
    /* @__PURE__ */ jsx4("h2", { className: "text-3xl font-semibold text-gray-800 sm:text-4xl", children: title }),
    /* @__PURE__ */ jsx4("p", { className: "mt-3 text-gray-600", children: description })
  ] }) }) });
};

// src/utils/class_names/index.ts
var classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// src/components/molecules/desktop-static-sidebar/index.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Documents", href: "#", current: false },
  { name: "Reports", href: "#", current: false }
];
var DesktopStaticSidebar = () => {
  return /* @__PURE__ */ jsx5("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ jsxs2("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6", children: [
    /* @__PURE__ */ jsx5("div", { className: "flex h-16 shrink-0 items-center" }),
    /* @__PURE__ */ jsx5("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ jsxs2("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
      /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5(
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
      /* @__PURE__ */ jsx5("li", { className: "-mx-6 mt-auto", children: /* @__PURE__ */ jsxs2("a", { href: "#", className: "flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50", children: [
        /* @__PURE__ */ jsx5("span", { className: "sr-only", children: "Your profile" }),
        /* @__PURE__ */ jsx5("span", { "aria-hidden": "true", children: "Tom Cook" })
      ] }) })
    ] }) })
  ] }) });
};

// src/components/molecules/nav-header/index.tsx
import Link from "next/link";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var NavHeader = ({
  onClick,
  state,
  // menuBtnEl,
  brandProps
}) => /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between py-5 md:block", children: [
  /* @__PURE__ */ jsx6(Link, { href: "/", children: /* @__PURE__ */ jsx6(Brand, __spreadValues({}, brandProps)) }),
  /* @__PURE__ */ jsx6("div", { className: "md:hidden", children: /* @__PURE__ */ jsx6(
    "button",
    {
      role: "button",
      className: "text-gray-500 hover:text-gray-800",
      onClick: () => onClick(),
      children: state ? /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx6(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          clipRule: "evenodd"
        }
      ) }) : /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ jsx6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }) })
    }
  ) })
] });
export {
  Brand,
  Button,
  CenteredCTAText,
  DesktopStaticSidebar,
  NavHeader,
  SectionWrapper,
  classNames
};
