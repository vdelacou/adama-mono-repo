var __defProp = Object.defineProperty;
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

// src/components/atoms/brand/index.tsx
import Image from "next/image";
import { jsx } from "react/jsx-runtime";
var Brand = ({ src, alt, width, height }) => /* @__PURE__ */ jsx(Image, { src, alt, width: width != null ? width : 86, height: height != null ? height : 48, priority: true });

// src/components/atoms/nav-link/index.tsx
import Link from "next/link";
import { jsx as jsx2 } from "react/jsx-runtime";
var NavLink = ({ children, href, className, scroll }) => /* @__PURE__ */ jsx2(Link, { href, className: `rounded-full px-4 py-2.5 text-center duration-150 ${className != null ? className : ""}`, scroll: scroll ? scroll : true, children });

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

// src/components/atoms/gradient-wrapper/index.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var GradientWrapper = ({ children, className, wrapperClassName }) => /* @__PURE__ */ jsxs2("div", { className: `relative py-28 ${className || ""}`, children: [
  /* @__PURE__ */ jsx5(
    "div",
    {
      className: `absolute top-12 m-auto h-[250px] max-w-3xl blur-[130px] ${wrapperClassName || ""}`,
      style: {
        background: "linear-gradient(108.49deg, rgba(152, 103, 240, 0.24) 23.1%, rgba(237, 78, 80, 0.06) 62.53%)"
      }
    }
  ),
  /* @__PURE__ */ jsx5("div", { className: "relative", children })
] });

// src/components/molecules/hero/index.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var Hero = ({ title, description, cta1, cta2 }) => /* @__PURE__ */ jsx6("section", { children: /* @__PURE__ */ jsx6(GradientWrapper, { wrapperClassName: "inset-0", className: "mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8", children: /* @__PURE__ */ jsxs3("div", { className: "mx-auto max-w-4xl space-y-5 text-center", children: [
  /* @__PURE__ */ jsxs3("h1", { className: "mx-auto text-4xl font-extrabold text-gray-800 sm:text-6xl", children: [
    title.left,
    " ",
    /* @__PURE__ */ jsx6("span", { className: " bg-gradient-to-r from-[#9867F0] to-[#ED4E50] bg-clip-text text-transparent", children: title.withGradient }),
    " ",
    title.right
  ] }),
  /* @__PURE__ */ jsx6("p", { className: "mx-auto max-w-xl", children: description }),
  /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-center gap-x-3 text-sm font-medium", children: [
    /* @__PURE__ */ jsxs3(NavLink, { href: cta1.href, className: "flex items-center gap-x-2 bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 ", children: [
      cta1.name,
      /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5", children: /* @__PURE__ */ jsx6(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
          clipRule: "evenodd"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs3(NavLink, { href: cta2.href, className: "flex items-center gap-x-2 text-gray-700 hover:text-gray-900", scroll: false, children: [
      cta2.name,
      /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5", children: /* @__PURE__ */ jsx6(
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
import Link2 from "next/link";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var NavHeader = ({ mobileMenuButtonOnClick, open, brandProps }) => /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between py-5 md:block", children: [
  /* @__PURE__ */ jsx7(Link2, { href: "/", children: /* @__PURE__ */ jsx7(Brand, __spreadValues({}, brandProps)) }),
  /* @__PURE__ */ jsx7("div", { className: "md:hidden", children: /* @__PURE__ */ jsx7("button", { role: "button", className: "text-gray-500 hover:text-gray-800", onClick: () => mobileMenuButtonOnClick(), children: open ? /* @__PURE__ */ jsx7("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx7(
    "path",
    {
      fillRule: "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      clipRule: "evenodd"
    }
  ) }) : /* @__PURE__ */ jsx7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ jsx7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }) }) }) })
] });

// src/components/organisms/nav-bar/index.tsx
import Link3 from "next/link";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var NavBar = ({ navLinkProps, navHeaderProps, authProps }) => {
  const { mobileMenuButtonOnClick, open, brandProps } = navHeaderProps;
  return /* @__PURE__ */ jsxs5("header", { className: "relative", children: [
    /* @__PURE__ */ jsx8("div", { className: "mx-auto max-w-screen-xl px-4 md:hidden md:px-8", children: /* @__PURE__ */ jsx8(NavHeader, { open, mobileMenuButtonOnClick, brandProps }) }),
    /* @__PURE__ */ jsx8("nav", { className: `bg-white pb-5 md:static md:block md:text-sm ${open ? "absolute inset-x-4 top-2 z-20 rounded-xl border shadow-lg md:border-none md:shadow-none" : "hidden"}`, children: /* @__PURE__ */ jsxs5("div", { className: "mx-auto max-w-screen-xl items-center gap-x-20 px-4 md:flex md:px-8", children: [
      /* @__PURE__ */ jsx8(NavHeader, { open, mobileMenuButtonOnClick, brandProps }),
      /* @__PURE__ */ jsxs5("div", { className: `mt-8 flex-1 items-center text-gray-600 md:mt-0 md:flex md:font-medium ${open ? "block" : "hidden"} `, children: [
        /* @__PURE__ */ jsx8("ul", { className: "items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0", children: navLinkProps.map((item) => {
          return /* @__PURE__ */ jsx8("li", { className: "hover:text-gray-900", children: /* @__PURE__ */ jsx8(Link3, { href: item.href, className: "block", scroll: false, children: item.name }) }, item.name);
        }) }),
        /* @__PURE__ */ jsxs5("div", { className: "mt-6 flex-1 items-center justify-end gap-x-6 space-y-6 md:mt-0 md:flex md:space-y-0", children: [
          /* @__PURE__ */ jsx8(Link3, { href: authProps.signIn.href, className: "block hover:text-gray-900", children: authProps.signIn.name }),
          /* @__PURE__ */ jsxs5(
            NavLink,
            {
              href: authProps.signUp.href,
              className: "flex items-center justify-center gap-x-1 bg-gray-800 text-sm font-medium text-white hover:bg-gray-600 active:bg-gray-900 md:inline-flex",
              children: [
                authProps.signUp.name,
                /* @__PURE__ */ jsx8("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-5 w-5", children: /* @__PURE__ */ jsx8(
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
export {
  Brand,
  CenteredCTAText,
  Hero,
  NavBar,
  NavHeader,
  NavLink,
  SectionWrapper,
  classNames
};
