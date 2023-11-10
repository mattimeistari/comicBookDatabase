import Database from "better-sqlite3";

// read from the database
export const selectGenres = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM genres");
		const genres = stmt.all();
		db.close();
		return genres;
	} catch (error) {
		console.error("Error selecting genres:", error.message);
		return [];
	}
};