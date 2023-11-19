import Database from "better-sqlite3";
import { logInsertStatement } from "../../../public/js/logInsertStatement.js";

export const createComicCharacter = (dbFile, comicId, characterId) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO comicCharacter(comicId, characterId) VALUES (?, ?)");
		stmt.run(comicId, characterId);
		db.close();

		const tableBeingUpdated = "comicCharacter";
		logInsertStatement(`INSERT INTO comicCharacter(comicId, characterId) VALUES (${comicId}, ${characterId})`, tableBeingUpdated);

		return true;

	} catch (error) {

		console.error("Error creating comicCharacter:", error.message);
		return false;

	}
};