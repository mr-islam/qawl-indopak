"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const node_machine_id_1 = require("node-machine-id");
const consts_1 = require("./consts");
exports.getAppName = () => electron_1.remote.app.getName();
exports.getAppVersion = () => electron_1.remote.app.getVersion();
exports.getClientId = () => node_machine_id_1.machineIdSync();
exports.getLanguage = () => window.navigator.language;
exports.getUserAgent = () => window.navigator.userAgent;
exports.getViewport = () => `${window.innerWidth}x${window.innerHeight}`;
exports.getScreenResolution = () => {
    const screen = electron_1.remote.screen.getPrimaryDisplay();
    return `${screen.size.width}x${screen.size.height}`;
};
exports.getNow = () => Date.now();
exports.getCache = () => {
    const cache = window.localStorage.getItem(consts_1.CACHE_KEY_NAME);
    return cache ? JSON.parse(cache) : [];
};
exports.setCache = (cache) => {
    window.localStorage.setItem(consts_1.CACHE_KEY_NAME, JSON.stringify(cache));
};
exports.retry = (cb, schedule) => setInterval(cb, schedule);
exports.fetch = (url, options) => window.fetch(url, options);
//# sourceMappingURL=side-effects.js.map