import Database from "better-sqlite3";
import { logInsertStatement } from "../../public/js/logInsertStatement.js";

export const createPublisher = (dbFile, name, description, countries) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO publishers(name, description) VALUES (?, ?)");
		const runStmt = stmt.run(name, description);

		const newPublisherId = runStmt.lastInsertRowid;


		let tableBeingUpdated = "publishers";
		logInsertStatement(`INSERT INTO publishers(name, description) VALUES (${name}, ${description})`, tableBeingUpdated);

		for (let i = 0; i < countries.length; i++) {

			const stmt = db.prepare("INSERT INTO countryPublisher(countryId, publisherId) VALUES (?, ?)");
			stmt.run(countries[i], newPublisherId);
			
			tableBeingUpdated = "countryPublisher";
			logInsertStatement(`INSERT INTO countryPublisher(name, description) VALUES (${name}, ${description})`, tableBeingUpdated);

		}

		db.close();

		return true;

	} catch (error) {

		console.error("Error creating publisher:", error.message);
		return false;
		
	}
};