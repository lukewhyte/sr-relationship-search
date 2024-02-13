"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getSalesByTarget = void 0;
const client_1 = __importDefault(require("../../protocol-api/client"));
const query_1 = require("../../protocol-api/query");
const getSalesByTarget = async (targetAddress) => {
    const result = await client_1.default.query({
        query: query_1.GET_SALES_BY_TARGET,
        variables: { targetAddresses: [targetAddress] },
    });
    return result.data.salesByTarget;
};
exports.getSalesByTarget = getSalesByTarget;
const getUser = async (targetAddress) => {
    const result = await client_1.default.query({
        query: query_1.GET_USER,
        variables: { userAddresses: [targetAddress] },
    });
    return result.data.user.length ? result.data.user[0] : null;
};
exports.getUser = getUser;
