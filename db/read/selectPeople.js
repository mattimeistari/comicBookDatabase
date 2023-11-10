import Database from "better-sqlite3";

// read from the database
export const selectPeople = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM people");
		const people = stmt.all();
		db.close();
		return people;
	} catch (error) {
		console.error("Error selecting people:", error.message);
		return [];
	}
};