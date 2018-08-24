'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Path = require("path");
const _ = require("lodash");
const chalk_1 = require("chalk");
function options(option = {}) {
    return _.assign({
        parser: {
            language: 'javascript',
        },
        compiler: {
            file: {
                name: 'docs',
                format: 'html',
            },
        },
        log: {
            level: 'info, warn',
            silent: false,
        },
        project: {
            name: '#',
            url: {
                home: '#',
                repo: '#',
            },
        },
        mrdoc: {
            source: 'src/',
            output: 'doc/',
            cwd: process.cwd(),
            watch: false,
            include: [],
            exclude: []
        },
    }, option);
}
exports.options = options;
function assign(opt) {
    return {
        mrdoc: {
            source: opt.source || opt.s,
            output: opt.output || opt.o,
            cwd: opt.cwd,
            watch: opt.watch || opt.w,
        },
        compiler: {
            file: {
                name: opt.formatName,
                format: opt.format,
            },
        },
        parser: {
            language: opt.parserLang,
            version: opt.parserVersion,
        },
        include: [],
        exclude: []
    };
}
exports.assign = assign;
function cli() {
    return {
        version: {
            alias: 'v',
            type: 'boolean',
            describe: chalk_1.default.gray('Print the global version.'),
        },
        mrdocrc: {
            type: 'string',
            default: Path.join(process.cwd(), '.docrc'),
            describe: chalk_1.default.gray(`Set the path to .docrc.
        This will set the cwd to the rc's directory as well.`),
        },
        cwd: {
            type: 'string',
            default: Path.normalize(process.cwd()),
            describe: chalk_1.default.gray('Set the cwd.'),
        },
        source: {
            alias: 's',
            type: 'string',
            describe: chalk_1.default.gray('Set the source directory(-ies). Note: Glob notation is allowed.'),
        },
        output: {
            alias: 'o',
            type: 'string',
            default: Path.join(process.cwd(), 'docs/'),
            describe: chalk_1.default.gray('Set the output directory.'),
        },
        format: {
            alias: 'f',
            type: 'string',
            default: options().compiler.file.format,
            describe: chalk_1.default.gray('Set the output format. Formats: html, json, md.'),
        },
        'format-name': {
            type: 'string',
            default: options().compiler.file.name,
            describe: chalk_1.default.gray('Set the output name. Note: Only in json and md format.'),
        },
        'parser-lang': {
            type: 'string',
            default: options().parser.language,
            describe: chalk_1.default.gray('Set the language of the sources. Note: This is automatically detected.'),
        },
        'project-name': {
            type: 'string',
            default: options().project.name,
            describe: chalk_1.default.gray('Set the project name.'),
        },
        'project-homepage': {
            type: 'string',
            default: options().project.url.home,
            describe: chalk_1.default.gray('Set the project homepage url.'),
        },
        'project-repo': {
            type: 'string',
            default: options().project.url.repo,
            describe: chalk_1.default.gray('Set the project url.'),
        },
        log: {
            alias: 'l',
            type: 'string',
            describe: chalk_1.default.gray(`Set the log level. Levels: ${[
                chalk_1.default.green('debug'),
                chalk_1.default.blue('info'),
                chalk_1.default.yellow('warn'),
                chalk_1.default.red('error'),
                chalk_1.default.gray('silent'),
            ].join(', ')}`),
            required: false,
            default: options().log.level,
        },
        watch: {
            alias: 'w',
            type: 'boolean',
            default: false,
            describe: chalk_1.default.gray('Allow changes and additions to be watched.'),
        },
    };
}
exports.cli = cli;
function merge(opt, normalize) {
    return _.merge(options(), normalize ? assign(opt) : opt);
}
exports.merge = merge;
exports.default = {
    options,
    assign,
    merge,
    cli,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL29wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsNkJBQTZCO0FBQzdCLDRCQUE0QjtBQUM1QixpQ0FBMEI7QUFpQzFCLFNBQWdCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRTtJQUNqQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDZCxNQUFNLEVBQUU7WUFDTixRQUFRLEVBQUUsWUFBWTtTQUN2QjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTTtnQkFDWixNQUFNLEVBQUUsTUFBTTthQUNmO1NBQ0Y7UUFDRCxHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsWUFBWTtZQUNuQixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLEdBQUc7WUFDVCxHQUFHLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsSUFBSSxFQUFFLEdBQUc7YUFDVjtTQUNGO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ2xCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLEVBRVI7WUFDRCxPQUFPLEVBQUUsRUFFUjtTQUNGO0tBQ0YsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNiLENBQUM7QUFuQ0QsMEJBbUNDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLEdBQVE7SUFDN0IsT0FBTztRQUNMLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztZ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QUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyBQYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuZXhwb3J0IGludGVyZmFjZSBEb2NPcHRpb25zIHtcbiAgcGFyc2VyOiB7XG4gICAgbGFuZ3VhZ2U6IHN0cmluZ1xuICB9XG4gIGNvbXBpbGVyOiB7XG4gICAgZmlsZToge1xuICAgICAgbmFtZTogc3RyaW5nXG4gICAgICBmb3JtYXQ6IHN0cmluZ1xuICAgIH1cbiAgfVxuICBsb2c6IHtcbiAgICBsZXZlbDogc3RyaW5nXG4gICAgc2lsZW50OiBib29sZWFuXG4gIH1cbiAgcHJvamVjdDoge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIHVybDoge1xuICAgICAgaG9tZTogc3RyaW5nXG4gICAgICByZXBvOiBzdHJpbmdcbiAgICB9LFxuICB9XG4gIG1yZG9jPzoge1xuICAgIHNvdXJjZTogc3RyaW5nXG4gICAgb3V0cHV0OiBzdHJpbmdcbiAgICBjd2Q6IHN0cmluZ1xuICAgIHdhdGNoOiBib29sZWFuLFxuICAgIGluY2x1ZGU/OiBzdHJpbmdbXSxcbiAgICBleGNsdWRlPzogc3RyaW5nW10sXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25zKG9wdGlvbiA9IHt9KSA6IERvY09wdGlvbnMge1xuICByZXR1cm4gXy5hc3NpZ24oe1xuICAgIHBhcnNlcjoge1xuICAgICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0JyxcbiAgICB9LFxuICAgIGNvbXBpbGVyOiB7XG4gICAgICBmaWxlOiB7XG4gICAgICAgIG5hbWU6ICdkb2NzJyxcbiAgICAgICAgZm9ybWF0OiAnaHRtbCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbG9nOiB7XG4gICAgICBsZXZlbDogJ2luZm8sIHdhcm4nLFxuICAgICAgc2lsZW50OiBmYWxzZSxcbiAgICB9LFxuICAgIHByb2plY3Q6IHtcbiAgICAgIG5hbWU6ICcjJyxcbiAgICAgIHVybDoge1xuICAgICAgICBob21lOiAnIycsXG4gICAgICAgIHJlcG86ICcjJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtcmRvYzoge1xuICAgICAgc291cmNlOiAnc3JjLycsXG4gICAgICBvdXRwdXQ6ICdkb2MvJyxcbiAgICAgIGN3ZDogcHJvY2Vzcy5jd2QoKSxcbiAgICAgIHdhdGNoOiBmYWxzZSxcbiAgICAgIGluY2x1ZGU6IFtcblxuICAgICAgXSxcbiAgICAgIGV4Y2x1ZGU6IFtcbiAgXG4gICAgICBdXG4gICAgfSxcbiAgfSwgb3B0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihvcHQ6IGFueSkge1xuICByZXR1cm4ge1xuICAgIG1yZG9jOiB7XG4gICAgICBzb3VyY2U6IG9wdC5zb3VyY2UgfHwgb3B0LnMsXG4gICAgICBvdXRwdXQ6IG9wdC5vdXRwdXQgfHwgb3B0Lm8sXG4gICAgICBjd2Q6IG9wdC5jd2QsXG4gICAgICB3YXRjaDogb3B0LndhdGNoIHx8IG9wdC53LFxuICAgIH0sXG4gICAgY29tcGlsZXI6IHtcbiAgICAgIGZpbGU6IHtcbiAgICAgICAgbmFtZTogb3B0LmZvcm1hdE5hbWUsXG4gICAgICAgIGZvcm1hdDogb3B0LmZvcm1hdCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwYXJzZXI6IHtcbiAgICAgIGxhbmd1YWdlOiBvcHQucGFyc2VyTGFuZyxcbiAgICAgIHZlcnNpb246IG9wdC5wYXJzZXJWZXJzaW9uLFxuICAgIH0sXG4gICAgaW5jbHVkZTogW1xuXG4gICAgXSxcbiAgICBleGNsdWRlOiBbXG5cbiAgICBdXG4gIH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsaSgpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiB7XG4gICAgICBhbGlhczogJ3YnLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVzY3JpYmU6IGNoYWxrLmdyYXkoJ1ByaW50IHRoZSBnbG9iYWwgdmVyc2lvbi4nKSxcbiAgICB9LFxuICAgIG1yZG9jcmM6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogUGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcuZG9jcmMnKSxcbiAgICAgIGRlc2NyaWJlOiBjaGFsay5ncmF5KFxuICAgICAgICBgU2V0IHRoZSBwYXRoIHRvIC5kb2NyYy5cbiAgICAgICAgVGhpcyB3aWxsIHNldCB0aGUgY3dkIHRvIHRoZSByYydzIGRpcmVjdG9yeSBhcyB3ZWxsLmApLFxuICAgIH0sXG4gICAgY3dkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IFBhdGgubm9ybWFsaXplKHByb2Nlc3MuY3dkKCkpLFxuICAgICAgZGVzY3JpYmU6IGNoYWxrLmdyYXkoJ1NldCB0aGUgY3dkLicpLFxuICAgIH0sXG4gICAgc291cmNlOiB7XG4gICAgICBhbGlhczogJ3MnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZXNjcmliZTogY2hhbGsuZ3JheShcbiAgICAgICAgJ1NldCB0aGUgc291cmNlIGRpcmVjdG9yeSgtaWVzKS4gTm90ZTogR2xvYiBub3RhdGlvbiBpcyBhbGxvd2VkLicpLFxuICAgIH0sXG4gICAgb3V0cHV0OiB7XG4gICAgICBhbGlhczogJ28nLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiBQYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RvY3MvJyksXG4gICAgICBkZXNjcmliZTogY2hhbGsuZ3JheSgnU2V0IHRoZSBvdXRwdXQgZGlyZWN0b3J5LicpLFxuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICBhbGlhczogJ2YnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiBvcHRpb25zKCkuY29tcGlsZXIuZmlsZS5mb3JtYXQsXG4gICAgICBkZXNjcmliZTogY2hhbGsuZ3JheSgnU2V0IHRoZSBvdXRwdXQgZm9ybWF0LiBGb3JtYXRzOiBodG1sLCBqc29uLCBtZC4nKSxcbiAgICB9LFxuICAgICdmb3JtYXQtbmFtZSc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogb3B0aW9ucygpLmNvbXBpbGVyLmZpbGUubmFtZSxcbiAgICAgIGRlc2NyaWJlOiBjaGFsay5ncmF5KCdTZXQgdGhlIG91dHB1dCBuYW1lLiBOb3RlOiBPbmx5IGluIGpzb24gYW5kIG1kIGZvcm1hdC4nKSxcbiAgICB9LFxuICAgICdwYXJzZXItbGFuZyc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogb3B0aW9ucygpLnBhcnNlci5sYW5ndWFnZSxcbiAgICAgIGRlc2NyaWJlOiBjaGFsay5ncmF5KFxuICAgICAgICAnU2V0IHRoZSBsYW5ndWFnZSBvZiB0aGUgc291cmNlcy4gTm90ZTogVGhpcyBpcyBhdXRvbWF0aWNhbGx5IGRldGVjdGVkLicpLFxuICAgIH0sXG4gICAgJ3Byb2plY3QtbmFtZSc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogb3B0aW9ucygpLnByb2plY3QubmFtZSxcbiAgICAgIGRlc2NyaWJlOiBjaGFsay5ncmF5KCdTZXQgdGhlIHByb2plY3QgbmFtZS4nKSxcbiAgICB9LFxuICAgICdwcm9qZWN0LWhvbWVwYWdlJzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiBvcHRpb25zKCkucHJvamVjdC51cmwuaG9tZSxcbiAgICAgIGRlc2NyaWJlOiBjaGFsay5ncmF5KCdTZXQgdGhlIHByb2plY3QgaG9tZXBhZ2UgdXJsLicpLFxuICAgIH0sXG4gICAgJ3Byb2plY3QtcmVwbyc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogb3B0aW9ucygpLnByb2plY3QudXJsLnJlcG8sXG4gICAgICBkZXNjcmliZTogY2hhbGsuZ3JheSgnU2V0IHRoZSBwcm9qZWN0IHVybC4nKSxcbiAgICB9LFxuICAgIGxvZzoge1xuICAgICAgYWxpYXM6ICdsJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVzY3JpYmU6IGNoYWxrLmdyYXkoYFNldCB0aGUgbG9nIGxldmVsLiBMZXZlbHM6ICR7W1xuICAgICAgICBjaGFsay5ncmVlbignZGVidWcnKSxcbiAgICAgICAgY2hhbGsuYmx1ZSgnaW5mbycpLFxuICAgICAgICBjaGFsay55ZWxsb3coJ3dhcm4nKSxcbiAgICAgICAgY2hhbGsucmVkKCdlcnJvcicpLFxuICAgICAgICBjaGFsay5ncmF5KCdzaWxlbnQnKSxcbiAgICAgIF0uam9pbignLCAnKX1gKSxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIGRlZmF1bHQ6IG9wdGlvbnMoKS5sb2cubGV2ZWwsXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgYWxpYXM6ICd3JyxcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpYmU6IGNoYWxrLmdyYXkoJ0FsbG93IGNoYW5nZXMgYW5kIGFkZGl0aW9ucyB0byBiZSB3YXRjaGVkLicpLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShvcHQ6IGFueSwgbm9ybWFsaXplPzogYm9vbGVhbikge1xuICByZXR1cm4gXy5tZXJnZShvcHRpb25zKCksIG5vcm1hbGl6ZSA/IGFzc2lnbihvcHQpIDogb3B0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvcHRpb25zLFxuICBhc3NpZ24sXG4gIG1lcmdlLFxuICBjbGksXG59Il19