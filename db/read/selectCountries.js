import Database from "better-sqlite3";

// read from the database
export const selectCountries = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM countries");
		const countries = stmt.all();
		db.close();
		return countries;
	} catch (error) {
		console.error("Error selecting countries:", error.message);
		return [];
	}
};