import Database from "better-sqlite3";

// read from the database
export const selectCharacters = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM characters");
		const characters = stmt.all();
		db.close();
		return characters;
	} catch (error) {
		console.error("Error selecting characters:", error.message);
		return [];
	}
};