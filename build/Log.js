"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
class Log {
    constructor(namespace, options) {
        /**
         * Outputs to console without any namepsaces or colors.
         *
         * @param message - The message to output.
         * @param data - The supporting data to output.
         *
         * # Remark
         *
         * `out()` is an alias to `console.log()`
         */
        this.out = (message, ...data) => {
            if (data.length > 0) {
                console.log(message, data);
            }
            console.log(message);
        };
        /**
         * Outputs to console using a grey color to indicate the log level.
         *
         * @param message - The message to output.
         * @param data - The supporting data to output.
         *
         * # Remark
         *
         * `log()` does not color the message.
         */
        this.log = (message, ...data) => {
            this.emit('log', message, data);
        };
        /**
         * Outputs to console using a blue color to indicate the log level.
         *
         * @param message - The message to output.
         * @param data - The supporting data to output.
         *
         * # Remark
         *
         * `info()` does not color the message.
         */
        this.info = (message, ...data) => {
            this.emit('info', message, data);
        };
        /**
         * Outputs to console using a green color to indicate the log level.
         *
         * @param message - The message to output.
         * @param data - The supporting data to output.
         *
         * # Remark
         *
         * `debug()` does not color the message.
         */
        this.debug = (message, ...data) => {
            this.emit('debug', message, data);
        };
        /**
         * Outputs to console using a yellow color to indicate the log level.
         *
         * @param message - The message to output.
         * @param data - The supporting data to output.
         *
         * # Remark
         *
         * `warn()` does not color the message.
         */
        this.warn = (message, ...data) => {
            this.emit('warn', message, data);
        };
        /**
         * Outputs to console using a red color to indicate the log level.
         *
         * @param message - The message to output.
         * @param data - The supporting data to output.
         *
         * # Remark
         *
         * `error()` does not color the message.
         */
        this.error = (message, ...data) => {
            this.emit('error', message, data);
        };
        this.emit = (level, message, data) => {
            if (this.options.enabled && this.options.levels.includes(level)) {
                if (data.length > 0) {
                    console[level](this.color(level, message), data);
                }
                else
                    console[level](this.color(level, message));
            }
        };
        this.namespace = namespace;
        this.options = Object.assign(options || {}, {
            enabled: true,
            levels: [
                'log',
                'info',
                'debug',
                'warn',
                'error'
            ]
        });
    }
    color(level, message) {
        switch (level) {
            case 'log':
                if (this.namespace) {
                    return `[${chalk.default.cyan(this.namespace)}]: ` + chalk.default.gray('log') + ' - ' + message;
                }
                return message;
            case 'info':
                if (this.namespace) {
                    return `[${chalk.default.magenta(this.namespace)}]: ` + chalk.default.blue('info') + ' - ' + message;
                }
                return chalk.default.blue(message);
            case 'debug':
                if (this.namespace) {
                    return `[${chalk.default.magenta(this.namespace)}]: ` + chalk.default.green('debug') + ' - ' + message;
                }
                return chalk.default.green(message);
            case 'warn':
                if (this.namespace) {
                    return `[${chalk.default.magenta(this.namespace)}]: ` + chalk.default.yellow('warn') + ' - ' + message;
                }
                return chalk.default.yellow(message);
            case 'error':
                if (this.namespace) {
                    return `[${chalk.default.magenta(this.namespace)}]: ` + chalk.default.red('error') + ' - ' + message;
                }
                return chalk.default.red(message);
            default:
                break;
        }
    }
}
exports.Log = Log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQTBCL0IsTUFBc0IsR0FBRztJQUd2QixZQUFZLFNBQWtCLEVBQUUsT0FBb0I7UUFjcEQ7Ozs7Ozs7OztXQVNHO1FBQ0gsUUFBRyxHQUFHLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVyxFQUFRLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDNUI7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQTtRQUVEOzs7Ozs7Ozs7V0FTRztRQUNILFFBQUcsR0FBRyxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVcsRUFBUSxFQUFFO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUE7UUFFRDs7Ozs7Ozs7O1dBU0c7UUFDSCxTQUFJLEdBQUcsQ0FBQyxPQUFlLEVBQUUsR0FBRyxJQUFXLEVBQVEsRUFBRTtZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUFBO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBQ0gsVUFBSyxHQUFHLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVyxFQUFRLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ25DLENBQUMsQ0FBQTtRQUVEOzs7Ozs7Ozs7V0FTRztRQUNILFNBQUksR0FBRyxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVcsRUFBUSxFQUFFO1lBQy9DLElBQUksQ0FBQyxJ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QU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsS0FBSyxPQUFPO2dCQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7aUJBQ3RHO2dCQUNELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEM7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQztDQUNGO0FBL0lELGtCQStJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNoYWxrIGZyb20gJ2NoYWxrJztcblxuLypcbiAgQGNyZWRpdHMgaHR0cHM6Ly9ibG9nLmhlbGxvanMub3JnL3NpbXBsZS1qYXZhc2NyaXB0LWxvZ2dlci1pbi10eXBlc2NyaXB0LWRlbW9uc3RyYXRpbmctaW50ZXJmYWNlcy11bmlvbi10eXBlcy1hbmQtcmVzdC1wYXJhbWV0ZXJzLTZlZmM1YWVlMmM5N1xuICBAYXV0aG9yIFRha2VzaGkgSXdhbmFcbiAqL1xuXG4vKipcbiAqIEFuIGludGVyZmFjZSB0aGF0IGRlZmluZXMgYSBsb2dnZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9nSW50ZXJmYWNlIHtcbiAgb3V0KG1lc3NhZ2U6IHN0cmluZywgLi4uZGF0YTogYW55W10pOiB2b2lkXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcsIC4uLmRhdGE6IGFueVtdKTogdm9pZFxuICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgLi4uZGF0YTogYW55W10pOiB2b2lkXG4gIGRlYnVnKG1lc3NhZ2U6IHN0cmluZywgLi4uZGF0YTogYW55W10pOiB2b2lkXG4gIHdhcm4obWVzc2FnZTogc3RyaW5nLCAuLi5kYXRhOiBhbnlbXSk6IHZvaWRcbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCAuLi5kYXRhOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IHR5cGUgTG9nTGV2ZWwgPSAnbG9nJyB8ICdpbmZvJyB8ICdkZWJ1ZycgfCAnd2FybicgfCAnZXJyb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZ09wdGlvbnMge1xuICBlbmFibGVkOiBib29sZWFuO1xuICBsZXZlbHM6IExvZ0xldmVsW11cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZyBpbXBsZW1lbnRzIExvZ0ludGVyZmFjZSB7XG4gIHByaXZhdGUgbmFtZXNwYWNlPzogc3RyaW5nO1xuICBwcml2YXRlIG9wdGlvbnM6IExvZ09wdGlvbnNcbiAgY29uc3RydWN0b3IobmFtZXNwYWNlPzogc3RyaW5nLCBvcHRpb25zPzogTG9nT3B0aW9ucykge1xuICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucyB8fCB7fSwge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICAnbG9nJyxcbiAgICAgICAgJ2luZm8nLFxuICAgICAgICAnZGVidWcnLFxuICAgICAgICAnd2FybicsXG4gICAgICAgICdlcnJvcidcbiAgICAgIF0gYXMgTG9nTGV2ZWxbXVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogT3V0cHV0cyB0byBjb25zb2xlIHdpdGhvdXQgYW55IG5hbWVwc2FjZXMgb3IgY29sb3JzLlxuICAgKiBcbiAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0byBvdXRwdXQuXG4gICAqIEBwYXJhbSBkYXRhIC0gVGhlIHN1cHBvcnRpbmcgZGF0YSB0byBvdXRwdXQuXG4gICAqIFxuICAgKiAjIFJlbWFya1xuICAgKiBcbiAgICogYG91dCgpYCBpcyBhbiBhbGlhcyB0byBgY29uc29sZS5sb2coKWBcbiAgICovXG4gIG91dCA9IChtZXNzYWdlOiBzdHJpbmcsIC4uLmRhdGE6IGFueVtdKTogdm9pZCA9PiB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSwgZGF0YSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIE91dHB1dHMgdG8gY29uc29sZSB1c2luZyBhIGdyZXkgY29sb3IgdG8gaW5kaWNhdGUgdGhlIGxvZyBsZXZlbC5cbiAgICogXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gb3V0cHV0LlxuICAgKiBAcGFyYW0gZGF0YSAtIFRoZSBzdXBwb3J0aW5nIGRhdGEgdG8gb3V0cHV0LlxuICAgKiBcbiAgICogIyBSZW1hcmtcbiAgICogXG4gICAqIGBsb2coKWAgZG9lcyBub3QgY29sb3IgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBsb2cgPSAobWVzc2FnZTogc3RyaW5nLCAuLi5kYXRhOiBhbnlbXSk6IHZvaWQgPT4ge1xuICAgIHRoaXMuZW1pdCgnbG9nJywgbWVzc2FnZSwgZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogT3V0cHV0cyB0byBjb25zb2xlIHVzaW5nIGEgYmx1ZSBjb2xvciB0byBpbmRpY2F0ZSB0aGUgbG9nIGxldmVsLlxuICAgKiBcbiAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0byBvdXRwdXQuXG4gICAqIEBwYXJhbSBkYXRhIC0gVGhlIHN1cHBvcnRpbmcgZGF0YSB0byBvdXRwdXQuXG4gICAqIFxuICAgKiAjIFJlbWFya1xuICAgKiBcbiAgICogYGluZm8oKWAgZG9lcyBub3QgY29sb3IgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBpbmZvID0gKG1lc3NhZ2U6IHN0cmluZywgLi4uZGF0YTogYW55W10pOiB2b2lkID0+IHtcbiAgICB0aGlzLmVtaXQoJ2luZm8nLCBtZXNzYWdlLCBkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIE91dHB1dHMgdG8gY29uc29sZSB1c2luZyBhIGdyZWVuIGNvbG9yIHRvIGluZGljYXRlIHRoZSBsb2cgbGV2ZWwuXG4gICAqIFxuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIG91dHB1dC5cbiAgICogQHBhcmFtIGRhdGEgLSBUaGUgc3VwcG9ydGluZyBkYXRhIHRvIG91dHB1dC5cbiAgICogXG4gICAqICMgUmVtYXJrXG4gICAqIFxuICAgKiBgZGVidWcoKWAgZG9lcyBub3QgY29sb3IgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBkZWJ1ZyA9IChtZXNzYWdlOiBzdHJpbmcsIC4uLmRhdGE6IGFueVtdKTogdm9pZCA9PiB7XG4gICAgdGhpcy5lbWl0KCdkZWJ1ZycsIG1lc3NhZ2UsIGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogT3V0cHV0cyB0byBjb25zb2xlIHVzaW5nIGEgeWVsbG93IGNvbG9yIHRvIGluZGljYXRlIHRoZSBsb2cgbGV2ZWwuXG4gICAqIFxuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIG91dHB1dC5cbiAgICogQHBhcmFtIGRhdGEgLSBUaGUgc3VwcG9ydGluZyBkYXRhIHRvIG91dHB1dC5cbiAgICogXG4gICAqICMgUmVtYXJrXG4gICAqIFxuICAgKiBgd2FybigpYCBkb2VzIG5vdCBjb2xvciB0aGUgbWVzc2FnZS5cbiAgICovXG4gIHdhcm4gPSAobWVzc2FnZTogc3RyaW5nLCAuLi5kYXRhOiBhbnlbXSk6IHZvaWQgPT4ge1xuICAgIHRoaXMuZW1pdCgnd2FybicsIG1lc3NhZ2UsIGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogT3V0cHV0cyB0byBjb25zb2xlIHVzaW5nIGEgcmVkIGNvbG9yIHRvIGluZGljYXRlIHRoZSBsb2cgbGV2ZWwuXG4gICAqIFxuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIG91dHB1dC5cbiAgICogQHBhcmFtIGRhdGEgLSBUaGUgc3VwcG9ydGluZyBkYXRhIHRvIG91dHB1dC5cbiAgICogXG4gICAqICMgUmVtYXJrXG4gICAqIFxuICAgKiBgZXJyb3IoKWAgZG9lcyBub3QgY29sb3IgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBlcnJvciA9IChtZXNzYWdlOiBzdHJpbmcsIC4uLmRhdGE6IGFueVtdKTogdm9pZCA9PiB7XG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIG1lc3NhZ2UsIGRhdGEpXG4gIH1cblxuICBwcml2YXRlIGVtaXQgPSAobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGRhdGE6IGFueVtdKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkICYmIHRoaXMub3B0aW9ucy5sZXZlbHMuaW5jbHVkZXMobGV2ZWwpKSB7XG4gICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGVbbGV2ZWxdKHRoaXMuY29sb3IobGV2ZWwsIG1lc3NhZ2UpLCBkYXRhKTtcbiAgICAgIH0gZWxzZSBjb25zb2xlW2xldmVsXSh0aGlzLmNvbG9yKGxldmVsLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb2xvcihsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN3aXRjaCAobGV2ZWwpIHtcbiAgICAgIGNhc2UgJ2xvZyc6XG4gICAgICAgIGlmICh0aGlzLm5hbWVzcGFjZSkge1xuICAgICAgICAgIHJldHVybiBgWyR7Y2hhbGsuZGVmYXVsdC5jeWFuKHRoaXMubmFtZXNwYWNlKX1dOiBgICsgY2hhbGsuZGVmYXVsdC5ncmF5KCdsb2cnKSArICcgLSAnICsgbWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICBpZiAodGhpcy5uYW1lc3BhY2UpIHtcbiAgICAgICAgICByZXR1cm4gYFske2NoYWxrLmRlZmF1bHQubWFnZW50YSh0aGlzLm5hbWVzcGFjZSl9XTogYCArIGNoYWxrLmRlZmF1bHQuYmx1ZSgnaW5mbycpICsgJyAtICcgKyBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFsay5kZWZhdWx0LmJsdWUobWVzc2FnZSk7XG4gICAgICBjYXNlICdkZWJ1Zyc6XG4gICAgICAgIGlmICh0aGlzLm5hbWVzcGFjZSkge1xuICAgICAgICAgIHJldHVybiBgWyR7Y2hhbGsuZGVmYXVsdC5tYWdlbnRhKHRoaXMubmFtZXNwYWNlKX1dOiBgICsgY2hhbGsuZGVmYXVsdC5ncmVlbignZGVidWcnKSArICcgLSAnICsgbWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbGsuZGVmYXVsdC5ncmVlbihtZXNzYWdlKTtcbiAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgICBpZiAodGhpcy5uYW1lc3BhY2UpIHtcbiAgICAgICAgICByZXR1cm4gYFske2NoYWxrLmRlZmF1bHQubWFnZW50YSh0aGlzLm5hbWVzcGFjZSl9XTogYCArIGNoYWxrLmRlZmF1bHQueWVsbG93KCd3YXJuJykgKyAnIC0gJyArIG1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYWxrLmRlZmF1bHQueWVsbG93KG1lc3NhZ2UpO1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICBpZiAodGhpcy5uYW1lc3BhY2UpIHtcbiAgICAgICAgICByZXR1cm4gYFske2NoYWxrLmRlZmF1bHQubWFnZW50YSh0aGlzLm5hbWVzcGFjZSl9XTogYCArIGNoYWxrLmRlZmF1bHQucmVkKCdlcnJvcicpICsgJyAtICcgKyBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFsay5kZWZhdWx0LnJlZChtZXNzYWdlKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufSJdfQ==