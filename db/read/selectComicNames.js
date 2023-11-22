import Database from "better-sqlite3";

// read from the database
export const selectComicNames = (dbFile) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare(`
            SELECT series.name, comics.issueNumber, comics.comicId
            FROM comics
            INNER JOIN comicSeries ON comics.comicId = comicSeries.comicId
            INNER JOIN series ON series.seriesId = comicSeries.seriesId
            ORDER BY series.name
        `);
		const comics = stmt.all();
		db.close();
		return comics.map(comic => ({
			name: `${comic.name} #${comic.issueNumber}`,
			comicId: comic.comicId
		}));
	} catch (error) {
		console.error("Error selecting comic names:", error.message);
		return [];
	}
};