import Database from "better-sqlite3";

// read from the database
export const selectPeopleNames = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT firstName, lastName, personId FROM people");
		const people = stmt.all();
		db.close();
		return people.map(person => ({
			fullName: `${person.firstName} ${person.lastName}`,
			personId: person.personId
		}));

	} catch (error) {
		console.error("Error selecting people names:", error.message);
		return [];
	}
};