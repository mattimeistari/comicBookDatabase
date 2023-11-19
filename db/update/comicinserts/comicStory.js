import Database from "better-sqlite3";
import { logInsertStatement } from "../../../public/js/logInsertStatement.js";

export const createComicStory = (dbFile, comicId, storyId) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO comicStory(comicId, storyId) VALUES (?, ?)");
		stmt.run(comicId, storyId);
		db.close();

		const tableBeingUpdated = "comicStory";
		logInsertStatement(`INSERT INTO comicStory(comicId, storyId) VALUES (${comicId}, ${storyId})`, tableBeingUpdated);

		return true;

	} catch (error) {

		console.error("Error creating comicStory:", error.message);
		return false;
        
	}
};