declare var newman: Newman.Newman;

declare module 'newman' {
    import * as Promise from "Bluebird";  
    
    export default newman;
}

declare namespace Newman {
    interface EventEmitter {

    }

    interface Collection {

    }

    interface Environment {

    }

    export interface Global {

    }

    interface IterationData {

    }

    interface Reporter {

    }

    interface Option {
        collection?: Collection | string,
        environment?: Environment | string,
        globals?: Global | string,
        iterationData?: IterationData | string,
        reporters?: Reporter | string,
        exportGlobals?: string,
        exportEnvironment?: string,
        exportCollection?: string
    }

    interface Newman {
        run(options: Option, callback?: () => void): EventEmitter;
        version(): string;
    }

    interface NewmanAsync {
        runAsync(options: Option, callback?: () => void): Promise<any>;
        versionAsync(): Promise<any>;
    }
}
