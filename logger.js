const fs = require('fs');
const path = require('path');

class Logger {
    static log(message, type = 'info') {
        const timestamp = new Date().toISOString();

        let logMessage = `[${timestamp}] ${message}`;

        let color;
        switch (type) {
            case 'info':
                color = '\x1b[34m';
                logMessage = `[INFO] ${logMessage}`;
                break;
            case 'warning':
                color = '\x1b[33m';
                logMessage = `[WARNING] ${logMessage}`;
                break;
            case 'error':
                color = '\x1b[31m';
                logMessage = `[ERROR] ${logMessage}`;
                break;
            case 'success':
                color = '\x1b[32m';
                logMessage = `[SUCCESS] ${logMessage}`;
                break;
            default:
                color = '\x1b[37m';
                logMessage = `[LOG] ${logMessage}`;
        }

        logMessage = `${color}${logMessage}\x1b[0m`;

        console.log(logMessage);

        this.writeToFile(logMessage);
    }

    static info(message) {
        this.log(message, 'info');
    }

    static warning(message) {
        this.log(message, 'warning');
    }

    static error(message) {
        this.log(message, 'error');
    }

    static success(message) {
        this.log(message, 'success');
    }

    static writeToFile(message) {
        const logFilePath = path.join(__dirname, 'logs.log');
        fs.appendFile(logFilePath, message + '\n', (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
    }
}

module.exports = Logger;