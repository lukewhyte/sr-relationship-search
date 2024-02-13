"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const collectors_1 = __importDefault(require("./collectors"));
const user_1 = __importDefault(require("./user"));
const creators_1 = __importDefault(require("./creators"));
const resolvers = (0, lodash_merge_1.default)(user_1.default, collectors_1.default, creators_1.default);
exports.default = resolvers;
