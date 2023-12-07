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

	if (req.session.isLoggedIn) {

		const user = req.session.user;
		const username = user.username;

		res.render("index", {

			title,
			comics,
			user,
			username
			
		});

	} else {

		const user = {

			userId: null,
			username: "user is not logged in",
			email: null,
			password: null,
			imageId: null

		};

		const username = user.username;

		res.render("index", {

			title,
			comics,
			user,
			username
			
		});

	}

});

router.post("/", (req, res) => {

	res.redirect("/login");

});


export { router };