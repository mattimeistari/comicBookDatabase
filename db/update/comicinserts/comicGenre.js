import Database from "better-sqlite3";
import { logInsertStatement } from "../../../public/js/logInsertStatement.js";

export const createComicGenre = (dbFile, comicId, genreId) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO comicGenre(comicId, genreId) VALUES (?, ?)");
		stmt.run(comicId, genreId);
		db.close();

		const tableBeingUpdated = "comicGenre";
		logInsertStatement(`INSERT INTO comicGenre(comicId, genreId) VALUES (${comicId}, ${genreId})`, tableBeingUpdated);

		return true;

	} catch (error) {

		console.error("Error creating comicGenre:", error.message);
		return false;
        
	}
};