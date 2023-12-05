import Database from "better-sqlite3";
import { logInsertStatement } from "../../public/js/logInsertStatement.js";

export const createImage = (dbFile, title, link, connectionId, tableToConnect) => {

	try {

		const db = new Database(dbFile);
		const stmt = db.prepare("INSERT INTO images(title, link) VALUES (?, ?)");
		const runStmt = stmt.run(title, link);

		const newImageId = runStmt.lastInsertRowid;

		const tableBeingUpdated = "images";
		logInsertStatement(`INSERT INTO images(title, link) VALUES ('${title}', '${link}')`, tableBeingUpdated);

		if (tableToConnect === "characterImageConnection") {
			console.log(`Table ${tableToConnect} has been selected, and the code has matched the two values.`);

			const stmt = db.prepare("INSERT INTO imageCharacter(imageId, characterId) VALUES (?, ?)");
			stmt.run(newImageId, connectionId);

		} else if (tableToConnect === "personImageConnection") {
			console.log(`Table ${tableToConnect} has been selected, and the code has matched the two values.`);

			const stmt = db.prepare("INSERT INTO imagePerson(imageId, personId) VALUES (?, ?)");
			stmt.run(newImageId, connectionId);

		} else if (tableToConnect === "comicImageConnection") {
			console.log(`Table ${tableToConnect} has been selected, and the code has matched the two values.`);

			const stmt = db.prepare("UPDATE comics SET coverArtId = ? WHERE comicId = ?");
			stmt.run(newImageId, connectionId);

		}

		db.close();

		return true;

	} catch (error) {

		console.error("Error creating image:", error.message);
		return false;
		
	}
};