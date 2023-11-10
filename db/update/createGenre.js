import Database from "better-sqlite3";
import { logInsertStatement } from "../update/logInsertStatement.js";

export const createGenre = (dbFile, name, description) => {

	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO genres(name, description) VALUES (?, ?)");
		stmt.run(name, description);
		db.close();

		logInsertStatement(`INSERT INTO genres(name, description) VALUES (${name}, ${description})`);

		return true;
	} catch (error) {
		console.error("Error creating genre:", error.message);
		return false;
	}
};