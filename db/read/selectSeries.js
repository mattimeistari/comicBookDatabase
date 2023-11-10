import Database from "better-sqlite3";

// read from the database
export const selectSeries = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM series");
		const series = stmt.all();
		db.close();
		return series;
	} catch (error) {
		console.error("Error selecting series:", error.message);
		return [];
	}
};