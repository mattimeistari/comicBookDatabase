import fs from 'fs';
import path from 'path';

export function logInsertStatement(stmtString) {
    const logsDirectory = '../private/logs';
    const logFileName = 'insertLogs.log';
    const logFilePath = path.join(__dirname, logsDirectory, logFileName);

  // Check if the logs directory exists, create it if not
    if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory, { recursive: true });
    }

  // Check if the log file exists, create it if not
    if (!fs.existsSync(logFilePath)) {
    fs.writeFileSync(logFilePath, ''); // Create an empty file
    }

  // Append the insert statement to the log file
    const logEntry = `${new Date().toISOString()} - ${stmtString}\n`;
    fs.appendFileSync(logFilePath, logEntry);
}
