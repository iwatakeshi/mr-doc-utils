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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL29wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsNkJBQTZCO0FBQzdCLDRCQUE0QjtBQUM1QixpQ0FBMEI7QUFpQzFCLFNBQWdCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRTtJQUNqQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDZCxNQUFNLEVBQUU7WUFDTixRQUFRLEVBQUUsWUFBWTtTQUN2QjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTTtnQkFDWixNQUFNLEVBQUUsTUFBTTthQUNmO1NBQ0Y7UUFDRCxHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsWUFBWTtZQUNuQixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLEdBQUc7WUFDVCxHQUFHLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsSUFBSSxFQUFFLEdBQUc7YUFDVjtTQUNGO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ2xCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLEVBRVI7WUFDRCxPQUFPLEVBQUUsRUFFUjtTQUNGO0tBQ0YsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNiLENBQUM7QUFuQ0QsMEJBbUNDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLEdBQVE7SUFDN0IsT0FBTztRQUNMLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztZ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QUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCAqIGFzIFBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jT3B0aW9ucyB7XHJcbiAgcGFyc2VyOiB7XHJcbiAgICBsYW5ndWFnZTogc3RyaW5nXHJcbiAgfVxyXG4gIGNvbXBpbGVyOiB7XHJcbiAgICBmaWxlOiB7XHJcbiAgICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgICBmb3JtYXQ6IHN0cmluZ1xyXG4gICAgfVxyXG4gIH1cclxuICBsb2c6IHtcclxuICAgIGxldmVsOiBzdHJpbmdcclxuICAgIHNpbGVudDogYm9vbGVhblxyXG4gIH1cclxuICBwcm9qZWN0OiB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIHVybDoge1xyXG4gICAgICBob21lOiBzdHJpbmdcclxuICAgICAgcmVwbzogc3RyaW5nXHJcbiAgICB9LFxyXG4gIH1cclxuICBtcmRvYz86IHtcclxuICAgIHNvdXJjZTogc3RyaW5nXHJcbiAgICBvdXRwdXQ6IHN0cmluZ1xyXG4gICAgY3dkOiBzdHJpbmdcclxuICAgIHdhdGNoOiBib29sZWFuLFxyXG4gICAgaW5jbHVkZT86IHN0cmluZ1tdLFxyXG4gICAgZXhjbHVkZT86IHN0cmluZ1tdLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25zKG9wdGlvbiA9IHt9KSA6IERvY09wdGlvbnMge1xyXG4gIHJldHVybiBfLmFzc2lnbih7XHJcbiAgICBwYXJzZXI6IHtcclxuICAgICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0JyxcclxuICAgIH0sXHJcbiAgICBjb21waWxlcjoge1xyXG4gICAgICBmaWxlOiB7XHJcbiAgICAgICAgbmFtZTogJ2RvY3MnLFxyXG4gICAgICAgIGZvcm1hdDogJ2h0bWwnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxvZzoge1xyXG4gICAgICBsZXZlbDogJ2luZm8sIHdhcm4nLFxyXG4gICAgICBzaWxlbnQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHByb2plY3Q6IHtcclxuICAgICAgbmFtZTogJyMnLFxyXG4gICAgICB1cmw6IHtcclxuICAgICAgICBob21lOiAnIycsXHJcbiAgICAgICAgcmVwbzogJyMnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1yZG9jOiB7XHJcbiAgICAgIHNvdXJjZTogJ3NyYy8nLFxyXG4gICAgICBvdXRwdXQ6ICdkb2MvJyxcclxuICAgICAgY3dkOiBwcm9jZXNzLmN3ZCgpLFxyXG4gICAgICB3YXRjaDogZmFsc2UsXHJcbiAgICAgIGluY2x1ZGU6IFtcclxuXHJcbiAgICAgIF0sXHJcbiAgICAgIGV4Y2x1ZGU6IFtcclxuICBcclxuICAgICAgXVxyXG4gICAgfSxcclxuICB9LCBvcHRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKG9wdDogYW55KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1yZG9jOiB7XHJcbiAgICAgIHNvdXJjZTogb3B0LnNvdXJjZSB8fCBvcHQucyxcclxuICAgICAgb3V0cHV0OiBvcHQub3V0cHV0IHx8IG9wdC5vLFxyXG4gICAgICBjd2Q6IG9wdC5jd2QsXHJcbiAgICAgIHdhdGNoOiBvcHQud2F0Y2ggfHwgb3B0LncsXHJcbiAgICB9LFxyXG4gICAgY29tcGlsZXI6IHtcclxuICAgICAgZmlsZToge1xyXG4gICAgICAgIG5hbWU6IG9wdC5mb3JtYXROYW1lLFxyXG4gICAgICAgIGZvcm1hdDogb3B0LmZvcm1hdCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwYXJzZXI6IHtcclxuICAgICAgbGFuZ3VhZ2U6IG9wdC5wYXJzZXJMYW5nLFxyXG4gICAgICB2ZXJzaW9uOiBvcHQucGFyc2VyVmVyc2lvbixcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiBbXHJcblxyXG4gICAgXSxcclxuICAgIGV4Y2x1ZGU6IFtcclxuXHJcbiAgICBdXHJcbiAgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGkoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHZlcnNpb246IHtcclxuICAgICAgYWxpYXM6ICd2JyxcclxuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICBkZXNjcmliZTogY2hhbGsuZ3JheSgnUHJpbnQgdGhlIGdsb2JhbCB2ZXJzaW9uLicpLFxyXG4gICAgfSxcclxuICAgIG1yZG9jcmM6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGRlZmF1bHQ6IFBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnLmRvY3JjJyksXHJcbiAgICAgIGRlc2NyaWJlOiBjaGFsay5ncmF5KFxyXG4gICAgICAgIGBTZXQgdGhlIHBhdGggdG8gLmRvY3JjLlxyXG4gICAgICAgIFRoaXMgd2lsbCBzZXQgdGhlIGN3ZCB0byB0aGUgcmMncyBkaXJlY3RvcnkgYXMgd2VsbC5gKSxcclxuICAgIH0sXHJcbiAgICBjd2Q6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGRlZmF1bHQ6IFBhdGgubm9ybWFsaXplKHByb2Nlc3MuY3dkKCkpLFxyXG4gICAgICBkZXNjcmliZTogY2hhbGsuZ3JheSgnU2V0IHRoZSBjd2QuJyksXHJcbiAgICB9LFxyXG4gICAgc291cmNlOiB7XHJcbiAgICAgIGFsaWFzOiAncycsXHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBkZXNjcmliZTogY2hhbGsuZ3JheShcclxuICAgICAgICAnU2V0IHRoZSBzb3VyY2UgZGlyZWN0b3J5KC1pZXMpLiBOb3RlOiBHbG9iIG5vdGF0aW9uIGlzIGFsbG93ZWQuJyksXHJcbiAgICB9LFxyXG4gICAgb3V0cHV0OiB7XHJcbiAgICAgIGFsaWFzOiAnbycsXHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBkZWZhdWx0OiBQYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RvY3MvJyksXHJcbiAgICAgIGRlc2NyaWJlOiBjaGFsay5ncmF5KCdTZXQgdGhlIG91dHB1dCBkaXJlY3RvcnkuJyksXHJcbiAgICB9LFxyXG4gICAgZm9ybWF0OiB7XHJcbiAgICAgIGFsaWFzOiAnZicsXHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBkZWZhdWx0OiBvcHRpb25zKCkuY29tcGlsZXIuZmlsZS5mb3JtYXQsXHJcbiAgICAgIGRlc2NyaWJlOiBjaGFsay5ncmF5KCdTZXQgdGhlIG91dHB1dCBmb3JtYXQuIEZvcm1hdHM6IGh0bWwsIGpzb24sIG1kLicpLFxyXG4gICAgfSxcclxuICAgICdmb3JtYXQtbmFtZSc6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGRlZmF1bHQ6IG9wdGlvbnMoKS5jb21waWxlci5maWxlLm5hbWUsXHJcbiAgICAgIGRlc2NyaWJlOiBjaGFsay5ncmF5KCdTZXQgdGhlIG91dHB1dCBuYW1lLiBOb3RlOiBPbmx5IGluIGpzb24gYW5kIG1kIGZvcm1hdC4nKSxcclxuICAgIH0sXHJcbiAgICAncGFyc2VyLWxhbmcnOiB7XHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBkZWZhdWx0OiBvcHRpb25zKCkucGFyc2VyLmxhbmd1YWdlLFxyXG4gICAgICBkZXNjcmliZTogY2hhbGsuZ3JheShcclxuICAgICAgICAnU2V0IHRoZSBsYW5ndWFnZSBvZiB0aGUgc291cmNlcy4gTm90ZTogVGhpcyBpcyBhdXRvbWF0aWNhbGx5IGRldGVjdGVkLicpLFxyXG4gICAgfSxcclxuICAgICdwcm9qZWN0LW5hbWUnOiB7XHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBkZWZhdWx0OiBvcHRpb25zKCkucHJvamVjdC5uYW1lLFxyXG4gICAgICBkZXNjcmliZTogY2hhbGsuZ3JheSgnU2V0IHRoZSBwcm9qZWN0IG5hbWUuJyksXHJcbiAgICB9LFxyXG4gICAgJ3Byb2plY3QtaG9tZXBhZ2UnOiB7XHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBkZWZhdWx0OiBvcHRpb25zKCkucHJvamVjdC51cmwuaG9tZSxcclxuICAgICAgZGVzY3JpYmU6IGNoYWxrLmdyYXkoJ1NldCB0aGUgcHJvamVjdCBob21lcGFnZSB1cmwuJyksXHJcbiAgICB9LFxyXG4gICAgJ3Byb2plY3QtcmVwbyc6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGRlZmF1bHQ6IG9wdGlvbnMoKS5wcm9qZWN0LnVybC5yZXBvLFxyXG4gICAgICBkZXNjcmliZTogY2hhbGsuZ3JheSgnU2V0IHRoZSBwcm9qZWN0IHVybC4nKSxcclxuICAgIH0sXHJcbiAgICBsb2c6IHtcclxuICAgICAgYWxpYXM6ICdsJyxcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGRlc2NyaWJlOiBjaGFsay5ncmF5KGBTZXQgdGhlIGxvZyBsZXZlbC4gTGV2ZWxzOiAke1tcclxuICAgICAgICBjaGFsay5ncmVlbignZGVidWcnKSxcclxuICAgICAgICBjaGFsay5ibHVlKCdpbmZvJyksXHJcbiAgICAgICAgY2hhbGsueWVsbG93KCd3YXJuJyksXHJcbiAgICAgICAgY2hhbGsucmVkKCdlcnJvcicpLFxyXG4gICAgICAgIGNoYWxrLmdyYXkoJ3NpbGVudCcpLFxyXG4gICAgICBdLmpvaW4oJywgJyl9YCksXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgZGVmYXVsdDogb3B0aW9ucygpLmxvZy5sZXZlbCxcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBhbGlhczogJ3cnLFxyXG4gICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICBkZXNjcmliZTogY2hhbGsuZ3JheSgnQWxsb3cgY2hhbmdlcyBhbmQgYWRkaXRpb25zIHRvIGJlIHdhdGNoZWQuJyksXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShvcHQ6IGFueSwgbm9ybWFsaXplPzogYm9vbGVhbikge1xyXG4gIHJldHVybiBfLm1lcmdlKG9wdGlvbnMoKSwgbm9ybWFsaXplID8gYXNzaWduKG9wdCkgOiBvcHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgb3B0aW9ucyxcclxuICBhc3NpZ24sXHJcbiAgbWVyZ2UsXHJcbiAgY2xpLFxyXG59Il19