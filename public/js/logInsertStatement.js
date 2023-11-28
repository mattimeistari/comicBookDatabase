import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export function logInsertStatement(stmtString, tableBeingUpdated) {
	const logsDirectory = path.join(fileURLToPath(new URL(".", import.meta.url)), "../../private/logs" );
	const logFileName = "insertLogs.log";
	const logFilePath = path.join(logsDirectory, logFileName);

	// Check if the logs directory exists, create it if not
	if (!fs.existsSync(logsDirectory)) {
		fs.mkdirSync(logsDirectory, { recursive: true });
	}

	// Check if the log file exists, create it if not
	if (!fs.existsSync(logFilePath)) {
		fs.writeFileSync(logFilePath, ""); // Create an empty file
	}

	// Make current date format and
	// Append the insert statement to the log file
	const currentDate = new Date();
	const formattedDate = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", hour: "numeric", minute: "numeric" }).format(currentDate);

	const logEntry = `${formattedDate} - Table ${tableBeingUpdated} has been updated. - ${stmtString}\n`;

	fs.appendFileSync(logFilePath, logEntry);
}
