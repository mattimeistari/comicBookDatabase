import Database from "better-sqlite3";
import { logInsertStatement } from "../../../public/js/logInsertStatement.js";

export const createComic = (dbFile, ISBN, publicationDate, summary, issueNumber, pageCount, price) => {

	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO comics(ISBN, publicationDate, summary, issueNumber, pageCount, price) VALUES (?, ?, ?, ?, ?, ?)");
		stmt.run(ISBN, publicationDate, summary, issueNumber, pageCount, price);
		db.close();

		const tableBeingUpdated = "comics independant";
		logInsertStatement(`INSERT INTO comics(name, description) VALUES (${ISBN}, ${publicationDate}, ${summary}, ${issueNumber}, ${pageCount}, ${price})`, tableBeingUpdated);

		return true;
	} catch (error) {
		console.error("Error creating comic independant base:", error.message);
		return false;
	}
};