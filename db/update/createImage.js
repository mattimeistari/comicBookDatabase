import Database from "better-sqlite3";
import { logInsertStatement } from "../../public/js/logInsertStatement.js";

export const createImage = (dbFile, title, link, tableToConnect) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO images(title, link) VALUES (?, ?)");
		stmt.run(title, link);
		db.close();

		const tableBeingUpdated = "images";
		logInsertStatement(`INSERT INTO images(title, link) VALUES (${title}, ${link})`, tableBeingUpdated);

		if (tableToConnect) {

		}

		return true;

	} catch (error) {

		console.error("Error creating genre:", error.message);
		return false;
		
	}
};