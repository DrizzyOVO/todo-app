"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStateSelector = void 0;
const check_1 = require("./check");
const recoil_1 = require("recoil");
exports.checkStateSelector = (0, recoil_1.selector)({
    key: 'userLoadingState',
    get: ({ get }) => {
        const state = get(check_1.checkStateAtom);
        return state.check;
    },
});
