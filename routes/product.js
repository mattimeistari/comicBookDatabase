import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { selectComicNamesAndImages } from "../db/read/selectComicNamesAndImages.js";

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/comicbook.db");

// get index page
router.get("/", (req, res) => {

	const title = "💀💀💀";

	const comics = selectComicNamesAndImages(dbFile);
    
	res.redirect();
});

export { router };