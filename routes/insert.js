import express from "express";
import path from "path";
import colors from "colors";
import { fileURLToPath } from "url";
import { selectCharacters } from "../db/read/selectCharacters.js";
import { selectGenres } from "../db/read/selectGenres.js";
import { selectPeople } from "../db/read/selectPeople.js";
import { selectPublishers } from "../db/read/selectPublishers.js";
import { selectRoles } from "../db/read/selectRoles.js";
import { selectSeries } from "../db/read/selectSeries.js";
import { selectStories } from "../db/read/selectStories.js";

import { createGenre } from "../db/update/createGenre.js";
import { createPublisher } from "../db/update/createPublisher.js";
import { createCharacter } from "../db/update/createCharacter.js";


const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/comicbook.db");

// get insert page
router.get("/", (req, res) => {

	const title = "💀💀💀";

	const people = selectPeople(dbFile);
	const roles = selectRoles(dbFile);
	const characters = selectCharacters(dbFile);
	const publishers = selectPublishers(dbFile);
	const genres = selectGenres(dbFile);
	const series = selectSeries(dbFile);
	const stories = selectStories(dbFile);

	console.log(colors.brightBlue.underline("Normal Page Loaded"));

	res.render("insert", {

		title,
		publishers,
		characters,
		people,
		roles,
		genres,
		series,
		stories

	});

});

router.post("/publisher", (req, res) => {

	createPublisher(dbFile, req.body.publisherName, req.body.publisherDescription);
	console.log(colors.yellow("publisher created!"));

	res.redirect("/insert");

});

router.post("/character", (req, res) => {

	createCharacter(dbFile, req.body.characterAlias, req.body.characterFirstName, req.body.characterLastName, req.body.characterDescription);
	res.redirect("/insert");

});

router.post("/comic", (req, res) => {

	
	res.redirect("/insert");

});

router.post("/genre", (req, res) => {

	createGenre(dbFile, req.body.genreName, req.body.genreDescription);
	console.log(colors.yellow("Genre created!"));

	res.redirect("/insert");

});


export { router };