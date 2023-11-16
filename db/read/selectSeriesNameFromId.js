import Database from "better-sqlite3";

// read from the database
export const selectSeriesNameFromId = (dbFile, seriesId) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT name FROM series WHERE seriesId = ?");
		const series = stmt.all(seriesId);
		db.close();
		return series;
	} catch (error) {
		console.error("Error selecting series from id:", error.message);
		return [];
	}
};