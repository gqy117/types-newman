import Bluebird = require("bluebird");

export interface EventEmitter {

}

export interface Collection {

}

export interface Environment {

}

export interface Global {

}

export interface IterationData {

}

export interface Reporter {

}

export interface Option {
    collection ? : Collection | string,
        environment ? : Environment | string,
        globals ? : Global | string,
        iterationData ? : IterationData | string,
        reporters ? : Reporter | string,
        exportGlobals ? : string,
        exportEnvironment ? : string,
        exportCollection ? : string
}

declare class NewmanAsync {
    runAsync(options: Option, callback ? : () => void): Bluebird<any>;
    versionAsync(): Bluebird<any>;
}

export function run(options: Option, callback ? : () => void): EventEmitter;
export function version(): string;