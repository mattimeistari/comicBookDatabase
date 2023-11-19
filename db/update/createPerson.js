import Database from "better-sqlite3";
import { logInsertStatement } from "../../public/js/logInsertStatement.js";

export const createPerson = (dbFile, firstName, lastName) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO people(firstName, lastName) VALUES (?, ?)");
		stmt.run(firstName, lastName);
		db.close();

		const tableBeingUpdated = "people";
		logInsertStatement(`INSERT INTO people(firstName, lastName) VALUES (${firstName}, ${lastName})`, tableBeingUpdated);

		return true;

	} catch (error) {

		console.error("Error creating person:", error.message);
		return false;
		
	}
};