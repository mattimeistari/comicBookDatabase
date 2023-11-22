import Database from "better-sqlite3";

// read from the database
export const selectCharacterNames = (dbFile) => {
	try {

		const db = new Database(dbFile);
		const stmt = db.prepare(`
            SELECT alias, characterId
            FROM characters
        `);
		const characters = stmt.all();
		db.close();
		return characters;

	} catch (error) {

		console.error("Error selecting character names:", error.message);
		return [];

	}
};
