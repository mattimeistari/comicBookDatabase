import Database from "better-sqlite3";

// read from the database
export const selectPublishers = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM publishers");
		const publishers = stmt.all();
		db.close();
		return publishers;
	} catch (error) {
		console.error("Error selecting publishers:", error.message);
		return [];
	}
};