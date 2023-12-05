import Database from "better-sqlite3";
import { logInsertStatement } from "../../public/js/logInsertStatement.js";

export const createSeries = (dbFile, name, description) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO series(name, description) VALUES (?, ?)");
		stmt.run(name, description);
		db.close();

		const tableBeingUpdated = "series";
		logInsertStatement(`INSERT INTO series(name, description) VALUES ('${name}', '${description}')`, tableBeingUpdated);

		return true;

	} catch (error) {

		console.error("Error creating series:", error.message);
		return false;
		
	}
};