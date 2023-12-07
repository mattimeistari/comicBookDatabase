import Database from "better-sqlite3";

// read from the database
export const selectComicInfo = (dbFile, comicId) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare(`
            SELECT series.name, comics.issueNumber, comics.comicId, images.link, comics.price, comics.summary,
            FROM comics
            INNER JOIN comicSeries ON comics.comicId = comicSeries.comicId
            INNER JOIN series ON series.seriesId = comicSeries.seriesId
            INNER JOIN images ON comics.coverArtId = images.imageId
            WHERE comics.issueNumber = 1
            AND
            WHERE comics.comicId = ?
            ORDER BY series.name;        
        `);
		const comics = stmt.all(comicId);
		db.close();
		return comics.map(comic => ({
			name: `${comic.name} #${comic.issueNumber}`,
			comicId: comic.comicId,
			coverArtLink: comic.link,
			price: comic.price,
			summary: comic.summary
		}));
	} catch (error) {
		console.error("Error selecting comic names:", error.message);
		return [];
	}
};