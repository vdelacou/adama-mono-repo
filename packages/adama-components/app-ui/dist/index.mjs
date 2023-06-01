// src/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button(props) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "rounded-md bg-brand-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
      children: props.children
    }
  );
}
Button.displayName = "Button";
export {
  Button
};
