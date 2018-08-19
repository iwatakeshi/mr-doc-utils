export interface DocOptions {
    parser: {
        language: string;
    };
    compiler: {
        file: {
            name: string;
            format: string;
        };
    };
    log: {
        level: string;
        silent: boolean;
    };
    project: {
        name: string;
        url: {
            home: string;
            repo: string;
        };
    };
    mrdoc?: {
        source: string;
        output: string;
        cwd: string;
        watch: boolean;
        include?: string[];
        exclude?: string[];
    };
}
export declare function options(option?: {}): DocOptions;
export declare function assign(opt: any): {
    mrdoc: {
        source: any;
        output: any;
        cwd: any;
        watch: any;
    };
    compiler: {
        file: {
            name: any;
            format: any;
        };
    };
    parser: {
        language: any;
        version: any;
    };
    include: any[];
    exclude: any[];
};
export declare function cli(): {
    version: {
        alias: string;
        type: string;
        describe: string;
    };
    mrdocrc: {
        type: string;
        default: string;
        describe: string;
    };
    cwd: {
        type: string;
        default: string;
        describe: string;
    };
    source: {
        alias: string;
        type: string;
        describe: string;
    };
    output: {
        alias: string;
        type: string;
        default: string;
        describe: string;
    };
    format: {
        alias: string;
        type: string;
        default: string;
        describe: string;
    };
    'format-name': {
        type: string;
        default: string;
        describe: string;
    };
    'parser-lang': {
        type: string;
        default: string;
        describe: string;
    };
    'project-name': {
        type: string;
        default: string;
        describe: string;
    };
    'project-homepage': {
        type: string;
        default: string;
        describe: string;
    };
    'project-repo': {
        type: string;
        default: string;
        describe: string;
    };
    log: {
        alias: string;
        type: string;
        describe: string;
        required: boolean;
        default: string;
    };
    watch: {
        alias: string;
        type: string;
        default: boolean;
        describe: string;
    };
};
export declare function merge(opt: any, normalize?: boolean): any;
declare const _default: {
    options: typeof options;
    assign: typeof assign;
    merge: typeof merge;
    cli: typeof cli;
};
export default _default;
