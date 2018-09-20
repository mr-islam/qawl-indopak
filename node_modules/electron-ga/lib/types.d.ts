export declare type ParamGetter<T> = () => T;
export declare type Param<T> = T | ParamGetter<T>;
export declare type InitParams = {
    protocolVersion?: Param<string>;
    trackId?: Param<string>;
    clientId?: Param<string>;
    userId?: Param<string>;
    appName?: Param<string>;
    appVersion?: Param<string>;
    language?: Param<string>;
    userAgent?: Param<string>;
    viewport?: Param<string>;
    screenResolution?: Param<string>;
};
export declare type Item = {
    __timestamp: number;
    tid: string;
    [key: string]: string | number;
};
