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
	const user = req.session.user;

	console.log("asdd22");

	const username = user.username;

	res.render("index", {

		title,
		comics,
		user,
		username
		
	});

});

router.post("/", (req, res) => {

	res.redirect("/login");

});


export { router };