"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFragmentReady = exports.makeFragmentData = exports.useFragment = void 0;
function useFragment(_documentNode, fragmentType) {
    return fragmentType;
}
exports.useFragment = useFragment;
function makeFragmentData(data, _fragment) {
    return data;
}
exports.makeFragmentData = makeFragmentData;
function isFragmentReady(queryNode, fragmentNode, data) {
    const deferredFields = queryNode.__meta__
        ?.deferredFields;
    if (!deferredFields)
        return true;
    const fragDef = fragmentNode.definitions[0];
    const fragName = fragDef?.name?.value;
    const fields = (fragName && deferredFields[fragName]) || [];
    return fields.length > 0 && fields.every(field => data && field in data);
}
exports.isFragmentReady = isFragmentReady;
