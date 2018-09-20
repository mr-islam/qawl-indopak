"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const qs_1 = require("qs");
const consts_1 = require("./consts");
const side_effects_1 = require("./side-effects");
exports.prepareUserAgent = (userAgent, appName) => userAgent.replace(new RegExp(`${appName}\\/\\d+\\.\\d+\\.\\d+ `), '').replace(/Electron\/\d+\.\d+\.\d+ /, '');
exports.getDefaultInitParams = () => {
    const appName = side_effects_1.getAppName();
    return {
        protocolVersion: '1',
        clientId: side_effects_1.getClientId(),
        appName,
        appVersion: side_effects_1.getAppVersion(),
        language: side_effects_1.getLanguage(),
        userAgent: exports.prepareUserAgent(side_effects_1.getUserAgent(), appName),
        viewport: side_effects_1.getViewport,
        screenResolution: side_effects_1.getScreenResolution
    };
};
exports.resolveParam = (value) => (typeof value === 'function' ? value() : value);
exports.prepareItems = (items, trackId, time) => items.map(item => (Object.assign({}, item, { tid: trackId, qt: time - item.__timestamp })));
exports.getBatches = (items, batchSize) => items.reduce((batches, item) => batches[batches.length - 1].length >= batchSize
    ? [...batches, [item]]
    : [...batches.slice(0, batches.length - 1), [...batches[batches.length - 1], item]], [[]]);
exports.sendBatches = ([batch, ...others], failedItems = []) => __awaiter(this, void 0, void 0, function* () {
    if (!batch || batch.length === 0)
        return failedItems;
    try {
        yield side_effects_1.fetch(consts_1.URL, { method: 'post', body: batch.map(item => qs_1.stringify(item)).join('\n') });
        return yield exports.sendBatches(others, failedItems);
    }
    catch (error) {
        return yield exports.sendBatches(others, [...failedItems, ...batch]);
    }
});
//# sourceMappingURL=helpers.js.map