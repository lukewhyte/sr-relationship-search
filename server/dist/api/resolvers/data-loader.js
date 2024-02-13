"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoader = exports.salesByTargetLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const client_1 = __importDefault(require("../../protocol-api/client"));
const query_1 = require("../../protocol-api/query");
const salesByTargetDataLoader = async (targetAddresses) => {
    const result = await client_1.default.query({
        query: query_1.GET_SALES_BY_TARGET,
        variables: { targetAddresses: targetAddresses },
    });
    return result.data.salesByTarget;
};
exports.salesByTargetLoader = new dataloader_1.default(salesByTargetDataLoader);
const userDataLoader = async (targetAddresses) => {
    const result = await client_1.default.query({
        query: query_1.GET_USER,
        variables: { userAddresses: targetAddresses },
    });
    return result.data.user;
};
exports.userLoader = new dataloader_1.default(userDataLoader);
