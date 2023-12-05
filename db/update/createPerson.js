import Database from "better-sqlite3";
import { logInsertStatement } from "../../public/js/logInsertStatement.js";

export const createPerson = (dbFile, firstName, lastName, countries) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO people(firstName, lastName) VALUES (?, ?)");
		const runStmt = stmt.run(firstName, lastName);

		const newPersonId = runStmt.lastInsertRowid;
		

		let tableBeingUpdated = "people";
		logInsertStatement(`INSERT INTO people(firstName, lastName) VALUES ('${firstName}', '${lastName}')`, tableBeingUpdated);

		for (let i = 0; i < countries.length; i++) {

			const stmt = db.prepare("INSERT INTO countryPerson(countryId, personId) VALUES (?, ?)");
			stmt.run(countries[i], newPersonId);
			
			tableBeingUpdated = "countryPublisher";
			logInsertStatement(`INSERT INTO countryPerson(countryId, personId) VALUES (${countries[i]}, ${newPersonId})`, tableBeingUpdated);

		}

		db.close();

		return true;

	} catch (error) {

		console.error("Error creating person:", error.message);
		return false;
		
	}
};