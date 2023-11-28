import Database from "better-sqlite3";

// read.js
export const createUsers = (dbFile, username, email, password) => {
	const db = new Database(dbFile);
	const stmt = db.prepare("INSERT INTO users(username, email, password) VALUES (?, ?, ?)");
	stmt.run(username, email, password);
	db.close();
	return true;
};