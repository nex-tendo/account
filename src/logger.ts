import chalk from 'chalk';

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
    console.log(chalk.green(Logger.formatMessage(LogLevel.INFO, message))); // Couleur verte pour INFO
  }

  public static warn(message: string): void {
    console.warn(chalk.yellow(Logger.formatMessage(LogLevel.WARN, message))); // Couleur jaune pour WARN
  }

  public static error(message: string): void {
    console.error(chalk.red(Logger.formatMessage(LogLevel.ERROR, message))); // Couleur rouge pour ERROR
  }

  public static debug(message: string): void {
    console.debug(chalk.cyan(Logger.formatMessage(LogLevel.DEBUG, message))); // Couleur cyan pour DEBUG
  }
}

export { Logger, LogLevel };