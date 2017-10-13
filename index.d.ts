declare var newman: Newman.Newman;

declare module 'newman' {
    export = newman;
}

declare namespace Newman {
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
        collection?: Collection | string,
        environment?: Environment | string,
        globals?: Global | string,
        iterationData?: IterationData | string,
        reporters?: Reporter | string,
        exportGlobals?: string,
        exportEnvironment?: string,
        exportCollection?: string
    }

    export interface Newman {
        run(options: Option, callback?: () => void): EventEmitter;
        version(): string;
    }
}
