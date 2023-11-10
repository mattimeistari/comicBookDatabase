import Database from 'better-sqlite3';

export const createGenre = (dbFile, name, description) => {

    try {
        const db = new Database(dbFile);
        const stmt = db.prepare('INSERT INTO genres(name, description) VALUES (?, ?)');
        console.log(stmt.source)
        stmt.run(name, description);
        db.close();

        logInsertStatement(stmt.source);

        return true;
    } catch (error) {
		console.error("Error creating genre:", error.message);
		return ["False"];
	}
};