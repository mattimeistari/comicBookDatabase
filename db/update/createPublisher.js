import Database from "better-sqlite3";
import { logInsertStatement } from "../update/logInsertStatement.js";

export const createPublisher = (dbFile, name, description) => {

	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO publishers(name, description) VALUES (?, ?)");
		stmt.run(name, description);
		db.close();

		const tableBeingUpdated = "publishers";
		logInsertStatement(`INSERT INTO publishers(name, description) VALUES (${name}, ${description})`, tableBeingUpdated);

		return true;
	} catch (error) {
		console.error("Error creating publisher:", error.message);
		return false;
	}
};