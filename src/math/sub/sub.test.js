"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sub_1 = __importDefault(require("./sub"));
it.each `
  a     | b    | expected
  ${3}  | ${2} | ${1}
  ${10} | ${5} | ${5}
`("should sub the numbers", ({ a, b, expected }) => {
    expect(sub_1.default(a, b)).toBe(expected);
});
