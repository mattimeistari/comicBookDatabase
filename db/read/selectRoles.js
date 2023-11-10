import Database from "better-sqlite3";

// read from the database
export const selectRoles = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM roles");
		const roles = stmt.all();
		db.close();
		return roles;
	} catch (error) {
		console.error("Error selecting roles:", error.message);
		return [];
	}
};