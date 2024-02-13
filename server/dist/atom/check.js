"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStateAtom = void 0;
const recoil_1 = require("recoil");
exports.checkStateAtom = (0, recoil_1.atom)({
    key: 'checkStateAtom',
    default: {
        check: false
    }
});
