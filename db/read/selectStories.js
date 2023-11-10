import Database from "better-sqlite3";

// read from the database
export const selectStories = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM stories");
		const stories = stmt.all();
		db.close();
		return stories;
	} catch (error) {
		console.error("Error selecting stories:", error.message);
		return [];
	}
};