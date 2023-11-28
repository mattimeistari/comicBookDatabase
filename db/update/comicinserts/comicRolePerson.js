import Database from "better-sqlite3";
import { logInsertStatement } from "../../../public/js/logInsertStatement.js";

export const createComicRolePerson = (dbFile, comicId, roleId, personId) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO comicRolePerson(comicId, roleId, personId) VALUES (?, ?, ?)");
		stmt.run(comicId, roleId, personId);
		db.close();

		const tableBeingUpdated = "comicRolePerson";
		logInsertStatement(`INSERT INTO comicRolePerson(comicId, roleId, personId) VALUES (${comicId}, ${roleId}, ${personId})`, tableBeingUpdated);

		return true;

	} catch (error) {

		console.error("Error creating comicRolePerson:", error.stack);
		return false;
        
	}
};