import Database from "better-sqlite3";
import { logInsertStatement } from "../../public/js/logInsertStatement.js";

export const createGenre = (dbFile, name, description) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO genres(name, description) VALUES (?, ?)");
		stmt.run(name, description);
		db.close();

		const tableBeingUpdated = "genres";
		logInsertStatement(`INSERT INTO genres(name, description) VALUES (${name}, ${description})`, tableBeingUpdated);

		return true;

	} catch (error) {

		console.error("Error creating genre:", error.message);
		return false;
		
	}
};