import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { selectComicInfo } from "../db/read/selectComicInfo.js";

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/comicbook.db");

// get index page
router.get("/", (req, res) => {

	const title = "fake";

	const productId = 1

	const comic = selectComicInfo(dbFile, productId);

	res.render("product", {

		title,
		comic,
		
	});

});

router.post("/:productId", (req, res) => {

	const title = "💀💀💀";

	// Retrieve productId from URL parameters
	const { productId } = req.params;

	// Use productId to get comic information
	const comic = selectComicInfo(dbFile, productId);
    
	res.render("product", {

		title,
		comic,
		
	});
});

export { router };