// src/utils/class_names/index.ts
var classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
export {
  classNames
};
