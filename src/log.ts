import * as chalk from 'chalk';

/*
  @credits https://blog.hellojs.org/simple-javascript-logger-in-typescript-demonstrating-interfaces-union-types-and-rest-parameters-6efc5aee2c97
  @author Takeshi Iwana
 */

/**
 * An interface that defines a logger.
 */
export interface LogInterface {
  out(message: string, ...data: any[]): void
  log(message: string, ...data: any[]): void
  info(message: string, ...data: any[]): void
  debug(message: string, ...data: any[]): void
  warn(message: string, ...data: any[]): void
  error(message: string, ...data: any[]): void
}

type LogLevel = 'log' | 'info' | 'debug' | 'warn' | 'error';

export default class Log implements LogInterface {
  private namespace?: string;

  constructor(namespace?: string) {
    this.namespace = namespace;
  }

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
  out = (message: string, ...data: any[]): void => {
    if (data.length > 0) {
      console.log(message, data);
    }
    console.log(message);
  }

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
  log = (message: string, ...data: any[]): void => {
    this.emit('log', message, data);
  }

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
  info = (message: string, ...data: any[]): void => {
    this.emit('info', message, data)
  }

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
  debug = (message: string, ...data: any[]): void => {
    this.emit('debug', message, data)
  }

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
  warn = (message: string, ...data: any[]): void => {
    this.emit('warn', message, data)
  }

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
  error = (message: string, ...data: any[]): void => {
    this.emit('error', message, data)
  }

  private emit = (level: LogLevel, message: string, data: any[]): void => {
    if (data.length > 0) {
      console[level](this.color(level, message), data);
    } else console[level](this.color(level, message));
  }

  private color(level: LogLevel, message: string) {
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