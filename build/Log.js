"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
class Log {
    constructor(namespace) {
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
            if (data.length > 0) {
                console[level](this.color(level, message), data);
            }
            else
                console[level](this.color(level, message));
        };
        this.namespace = namespace;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQXFCL0IsTUFBc0IsR0FBRztJQUd2QixZQUFZLFNBQWtCO1FBSTlCOzs7Ozs7Ozs7V0FTRztRQUNILFFBQUcsR0FBRyxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVcsRUFBUSxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUE7UUFFRDs7Ozs7Ozs7O1dBU0c7UUFDSCxRQUFHLEdBQUcsQ0FBQyxPQUFlLEVBQUUsR0FBRyxJQUFXLEVBQVEsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFBO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBQ0gsU0FBSSxHQUFHLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVyxFQUFRLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQTtRQUVEOzs7Ozs7Ozs7V0FTRztRQUNILFVBQUssR0FBRyxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVcsRUFBUSxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNuQyxDQUFDLENBQUE7UUFFRDs7Ozs7Ozs7O1dBU0c7UUFDSCxTQUFJLEdBQUcsQ0FBQyxPQUFlLEVBQUUsR0FBRyxJQUFXLEVBQVEsRUFBRTtZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUFBO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBQ0gsVUFBSyxHQUFHLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVyxFQUFRLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ25DLENBQUMsQ0FBQTtRQUVPLFNBQUksR0FBRyxDQUFDLEtBQWUsRUFBRSxPQUFlLEVBQUUsSUFBVyxFQUFRLEVBQUU7WUFDckUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xEOztnQkFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUE7UUE5RkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQStGTyxLQUFLLENBQUMsS0FBZSxFQUFFLE9BQWU7UUFDNUMsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztpQkFDbEc7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxNQUFNO2dCQUNULElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7aUJBQ3RHO2dCQUNELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsS0FBSyxPQUFPO2dCQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7aUJBQ3hHO2dCQUNELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsS0FBSyxNQUFNO2dCQUNULElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7aUJBQ3hHO2dCQUNELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsS0FBSyxPQUFPO2dCQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7aUJBQ3RHO2dCQUNELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEM7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQztDQUNGO0FBbklELGtCQW1JQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNoYWxrIGZyb20gJ2NoYWxrJztcblxuLypcbiAgQGNyZWRpdHMgaHR0cHM6Ly9ibG9nLmhlbGxvanMub3JnL3NpbXBsZS1qYXZhc2NyaXB0LWxvZ2dlci1pbi10eXBlc2NyaXB0LWRlbW9uc3RyYXRpbmctaW50ZXJmYWNlcy11bmlvbi10eXBlcy1hbmQtcmVzdC1wYXJhbWV0ZXJzLTZlZmM1YWVlMmM5N1xuICBAYXV0aG9yIFRha2VzaGkgSXdhbmFcbiAqL1xuXG4vKipcbiAqIEFuIGludGVyZmFjZSB0aGF0IGRlZmluZXMgYSBsb2dnZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9nSW50ZXJmYWNlIHtcbiAgb3V0KG1lc3NhZ2U6IHN0cmluZywgLi4uZGF0YTogYW55W10pOiB2b2lkXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcsIC4uLmRhdGE6IGFueVtdKTogdm9pZFxuICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgLi4uZGF0YTogYW55W10pOiB2b2lkXG4gIGRlYnVnKG1lc3NhZ2U6IHN0cmluZywgLi4uZGF0YTogYW55W10pOiB2b2lkXG4gIHdhcm4obWVzc2FnZTogc3RyaW5nLCAuLi5kYXRhOiBhbnlbXSk6IHZvaWRcbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCAuLi5kYXRhOiBhbnlbXSk6IHZvaWRcbn1cblxudHlwZSBMb2dMZXZlbCA9ICdsb2cnIHwgJ2luZm8nIHwgJ2RlYnVnJyB8ICd3YXJuJyB8ICdlcnJvcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2cgaW1wbGVtZW50cyBMb2dJbnRlcmZhY2Uge1xuICBwcml2YXRlIG5hbWVzcGFjZT86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lc3BhY2U/OiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdXRwdXRzIHRvIGNvbnNvbGUgd2l0aG91dCBhbnkgbmFtZXBzYWNlcyBvciBjb2xvcnMuXG4gICAqIFxuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIG91dHB1dC5cbiAgICogQHBhcmFtIGRhdGEgLSBUaGUgc3VwcG9ydGluZyBkYXRhIHRvIG91dHB1dC5cbiAgICogXG4gICAqICMgUmVtYXJrXG4gICAqIFxuICAgKiBgb3V0KClgIGlzIGFuIGFsaWFzIHRvIGBjb25zb2xlLmxvZygpYFxuICAgKi9cbiAgb3V0ID0gKG1lc3NhZ2U6IHN0cmluZywgLi4uZGF0YTogYW55W10pOiB2b2lkID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCBkYXRhKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cblxuICAvKipcbiAgICogT3V0cHV0cyB0byBjb25zb2xlIHVzaW5nIGEgZ3JleSBjb2xvciB0byBpbmRpY2F0ZSB0aGUgbG9nIGxldmVsLlxuICAgKiBcbiAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0byBvdXRwdXQuXG4gICAqIEBwYXJhbSBkYXRhIC0gVGhlIHN1cHBvcnRpbmcgZGF0YSB0byBvdXRwdXQuXG4gICAqIFxuICAgKiAjIFJlbWFya1xuICAgKiBcbiAgICogYGxvZygpYCBkb2VzIG5vdCBjb2xvciB0aGUgbWVzc2FnZS5cbiAgICovXG4gIGxvZyA9IChtZXNzYWdlOiBzdHJpbmcsIC4uLmRhdGE6IGFueVtdKTogdm9pZCA9PiB7XG4gICAgdGhpcy5lbWl0KCdsb2cnLCBtZXNzYWdlLCBkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdXRwdXRzIHRvIGNvbnNvbGUgdXNpbmcgYSBibHVlIGNvbG9yIHRvIGluZGljYXRlIHRoZSBsb2cgbGV2ZWwuXG4gICAqIFxuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIG91dHB1dC5cbiAgICogQHBhcmFtIGRhdGEgLSBUaGUgc3VwcG9ydGluZyBkYXRhIHRvIG91dHB1dC5cbiAgICogXG4gICAqICMgUmVtYXJrXG4gICAqIFxuICAgKiBgaW5mbygpYCBkb2VzIG5vdCBjb2xvciB0aGUgbWVzc2FnZS5cbiAgICovXG4gIGluZm8gPSAobWVzc2FnZTogc3RyaW5nLCAuLi5kYXRhOiBhbnlbXSk6IHZvaWQgPT4ge1xuICAgIHRoaXMuZW1pdCgnaW5mbycsIG1lc3NhZ2UsIGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogT3V0cHV0cyB0byBjb25zb2xlIHVzaW5nIGEgZ3JlZW4gY29sb3IgdG8gaW5kaWNhdGUgdGhlIGxvZyBsZXZlbC5cbiAgICogXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gb3V0cHV0LlxuICAgKiBAcGFyYW0gZGF0YSAtIFRoZSBzdXBwb3J0aW5nIGRhdGEgdG8gb3V0cHV0LlxuICAgKiBcbiAgICogIyBSZW1hcmtcbiAgICogXG4gICAqIGBkZWJ1ZygpYCBkb2VzIG5vdCBjb2xvciB0aGUgbWVzc2FnZS5cbiAgICovXG4gIGRlYnVnID0gKG1lc3NhZ2U6IHN0cmluZywgLi4uZGF0YTogYW55W10pOiB2b2lkID0+IHtcbiAgICB0aGlzLmVtaXQoJ2RlYnVnJywgbWVzc2FnZSwgZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBPdXRwdXRzIHRvIGNvbnNvbGUgdXNpbmcgYSB5ZWxsb3cgY29sb3IgdG8gaW5kaWNhdGUgdGhlIGxvZyBsZXZlbC5cbiAgICogXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gb3V0cHV0LlxuICAgKiBAcGFyYW0gZGF0YSAtIFRoZSBzdXBwb3J0aW5nIGRhdGEgdG8gb3V0cHV0LlxuICAgKiBcbiAgICogIyBSZW1hcmtcbiAgICogXG4gICAqIGB3YXJuKClgIGRvZXMgbm90IGNvbG9yIHRoZSBtZXNzYWdlLlxuICAgKi9cbiAgd2FybiA9IChtZXNzYWdlOiBzdHJpbmcsIC4uLmRhdGE6IGFueVtdKTogdm9pZCA9PiB7XG4gICAgdGhpcy5lbWl0KCd3YXJuJywgbWVzc2FnZSwgZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBPdXRwdXRzIHRvIGNvbnNvbGUgdXNpbmcgYSByZWQgY29sb3IgdG8gaW5kaWNhdGUgdGhlIGxvZyBsZXZlbC5cbiAgICogXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gb3V0cHV0LlxuICAgKiBAcGFyYW0gZGF0YSAtIFRoZSBzdXBwb3J0aW5nIGRhdGEgdG8gb3V0cHV0LlxuICAgKiBcbiAgICogIyBSZW1hcmtcbiAgICogXG4gICAqIGBlcnJvcigpYCBkb2VzIG5vdCBjb2xvciB0aGUgbWVzc2FnZS5cbiAgICovXG4gIGVycm9yID0gKG1lc3NhZ2U6IHN0cmluZywgLi4uZGF0YTogYW55W10pOiB2b2lkID0+IHtcbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbWVzc2FnZSwgZGF0YSlcbiAgfVxuXG4gIHByaXZhdGUgZW1pdCA9IChsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgZGF0YTogYW55W10pOiB2b2lkID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlW2xldmVsXSh0aGlzLmNvbG9yKGxldmVsLCBtZXNzYWdlKSwgZGF0YSk7XG4gICAgfSBlbHNlIGNvbnNvbGVbbGV2ZWxdKHRoaXMuY29sb3IobGV2ZWwsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29sb3IobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgICBjYXNlICdsb2cnOlxuICAgICAgICBpZiAodGhpcy5uYW1lc3BhY2UpIHtcbiAgICAgICAgICByZXR1cm4gYFske2NoYWxrLmRlZmF1bHQuY3lhbih0aGlzLm5hbWVzcGFjZSl9XTogYCArIGNoYWxrLmRlZmF1bHQuZ3JheSgnbG9nJykgKyAnIC0gJyArIG1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgaWYgKHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgICAgcmV0dXJuIGBbJHtjaGFsay5kZWZhdWx0Lm1hZ2VudGEodGhpcy5uYW1lc3BhY2UpfV06IGAgKyBjaGFsay5kZWZhdWx0LmJsdWUoJ2luZm8nKSArICcgLSAnICsgbWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbGsuZGVmYXVsdC5ibHVlKG1lc3NhZ2UpO1xuICAgICAgY2FzZSAnZGVidWcnOlxuICAgICAgICBpZiAodGhpcy5uYW1lc3BhY2UpIHtcbiAgICAgICAgICByZXR1cm4gYFske2NoYWxrLmRlZmF1bHQubWFnZW50YSh0aGlzLm5hbWVzcGFjZSl9XTogYCArIGNoYWxrLmRlZmF1bHQuZ3JlZW4oJ2RlYnVnJykgKyAnIC0gJyArIG1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYWxrLmRlZmF1bHQuZ3JlZW4obWVzc2FnZSk7XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgICAgaWYgKHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgICAgcmV0dXJuIGBbJHtjaGFsay5kZWZhdWx0Lm1hZ2VudGEodGhpcy5uYW1lc3BhY2UpfV06IGAgKyBjaGFsay5kZWZhdWx0LnllbGxvdygnd2FybicpICsgJyAtICcgKyBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFsay5kZWZhdWx0LnllbGxvdyhtZXNzYWdlKTtcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgaWYgKHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgICAgcmV0dXJuIGBbJHtjaGFsay5kZWZhdWx0Lm1hZ2VudGEodGhpcy5uYW1lc3BhY2UpfV06IGAgKyBjaGFsay5kZWZhdWx0LnJlZCgnZXJyb3InKSArICcgLSAnICsgbWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbGsuZGVmYXVsdC5yZWQobWVzc2FnZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn0iXX0=