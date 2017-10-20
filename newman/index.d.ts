import Bluebird = require("bluebird");

declare namespace Newman {
    interface EventEmitter {

    }

    interface Collection {

    }

    interface Environment {

    }

    interface Global {

    }

    interface IterationData {

    }

    interface Reporter {

    }

    interface Option {
        collection ? : Collection | string,
            environment ? : Environment | string,
            globals ? : Global | string,
            iterationData ? : IterationData | string,
            reporters ? : Reporter | string,
            exportGlobals ? : string,
            exportEnvironment ? : string,
            exportCollection ? : string
    }
}

declare class Newman {
    static run(options: Newman.Option, callback ? : () => void): Newman.EventEmitter;
    static version(): string;

    runAsync(options: Newman.Option, callback ? : () => void): Bluebird<any>;
    versionAsync(): Bluebird<any>;
}

export = Newman;
