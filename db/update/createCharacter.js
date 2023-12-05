import Database from "better-sqlite3";
import { logInsertStatement } from "../../public/js/logInsertStatement.js";

export const createCharacter = (dbFile, alias, firstName, lastName, description) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO characters(alias, firstName, lastName, description) VALUES (?, ?, ?, ?)");
		stmt.run(alias, firstName, lastName, description);
		db.close();

		const tableBeingUpdated = "characters";
		logInsertStatement(`INSERT INTO characters(alias, firstName, lastName, description) VALUES ('${alias}', '${firstName}', '${lastName}', '${description}')`, tableBeingUpdated);

		return true;

	} catch (error) {

		console.error("Error creating character:", error.message);
		return false;
		
	}
};