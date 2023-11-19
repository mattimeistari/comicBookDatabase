import Database from "better-sqlite3";
import { logInsertStatement } from "../../../public/js/logInsertStatement.js";

export const createComicSeries = (dbFile, comicId, seriesId) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO comicSeries(comicId, seriesId) VALUES (?, ?)");
		stmt.run(comicId, seriesId);
		db.close();

		const tableBeingUpdated = "comicSeries";
		logInsertStatement(`INSERT INTO comicSeries(comicId, seriesId) VALUES (${comicId}, ${seriesId})`, tableBeingUpdated);

		return true;

	} catch (error) {

		console.error("Error creating comicSeries:", error.message);
		return false;
        
	}
};