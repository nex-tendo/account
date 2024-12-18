import colors from 'colors';

enum LogLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
  DEBUG = "DEBUG"
}

class Logger {
  private static getCurrentTime(): string {
    const now = new Date();
    return `${now.toISOString()}`;
  }

  private static formatMessage(level: LogLevel, message: string): string {
    const time = Logger.getCurrentTime();
    return `[${time}] [${level}] ${message}`;
  }

  public static info(message: string): void {
    console.log(colors.green(Logger.formatMessage(LogLevel.INFO, message)));
  }

  public static warn(message: string): void {
    console.warn(colors.yellow(Logger.formatMessage(LogLevel.WARN, message)));
  }

  public static error(message: string): void {
    console.error(colors.red(Logger.formatMessage(LogLevel.ERROR, message)));
  }

  public static debug(message: string): void {
    console.debug(colors.cyan(Logger.formatMessage(LogLevel.DEBUG, message)));
  }
}

export { Logger, LogLevel };