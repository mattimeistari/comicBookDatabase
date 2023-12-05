import Database from "better-sqlite3";
import { logInsertStatement } from "../../../public/js/logInsertStatement.js";

export const createSeriesStory = (dbFile, seriesId, storyId) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO seriesStory(seriesId, storyId) VALUES (?, ?)");
		stmt.run(seriesId, storyId);
		db.close();

		const tableBeingUpdated = "seriesStory";
		logInsertStatement(`INSERT INTO seriesStory(seriesId, storyId) VALUES (${seriesId}, ${storyId})`, tableBeingUpdated);

		return true;

	} catch (error) {

		console.error("Error creating seriesStory:", error.message);
		return false;
        
	}
};