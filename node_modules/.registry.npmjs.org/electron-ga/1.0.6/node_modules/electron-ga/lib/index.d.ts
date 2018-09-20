import { InitParams } from './types';
export declare class Analytics {
    private trackId;
    private protocolVersion;
    private clientId;
    private userId;
    private appName;
    private appVersion;
    private language;
    private userAgent;
    private viewport;
    private screenResolution;
    constructor(trackId: string, params?: InitParams);
    send: (hitType?: string, additionalParams?: object) => Promise<void>;
    private getParams(hitType, additionalParams, time);
}
export default Analytics;
