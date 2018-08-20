/**
 * An interface that defines a logger.
 */
export interface LogInterface {
    out(message: string, ...data: any[]): void;
    log(message: string, ...data: any[]): void;
    info(message: string, ...data: any[]): void;
    debug(message: string, ...data: any[]): void;
    warn(message: string, ...data: any[]): void;
    error(message: string, ...data: any[]): void;
}
export default abstract class Log implements LogInterface {
    private namespace?;
    constructor(namespace?: string);
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
    out: (message: string, ...data: any[]) => void;
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
    log: (message: string, ...data: any[]) => void;
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
    info: (message: string, ...data: any[]) => void;
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
    debug: (message: string, ...data: any[]) => void;
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
    warn: (message: string, ...data: any[]) => void;
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
    error: (message: string, ...data: any[]) => void;
    private emit;
    private color;
}
