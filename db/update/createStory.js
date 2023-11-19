import Database from "better-sqlite3";
import { logInsertStatement } from "../../public/js/logInsertStatement.js";

export const createStory = (dbFile, title, description) => {

	try {
        
		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO stories(title, description) VALUES (?, ?)");
		stmt.run(title, description);
		db.close();

		const tableBeingUpdated = "stories";
		logInsertStatement(`INSERT INTO stories(title, description) VALUES (${title}, ${description})`, tableBeingUpdated);

		return true;

	} catch (error) {

		console.error("Error creating stories:", error.message);
		return false;

	}
};