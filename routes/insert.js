import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { selectCharacters } from "../db/read/selectCharacters.js";
import { selectGenres } from "../db/read/selectGenres.js";
import { selectPeople } from "../db/read/selectPeople.js";
import { selectPublishers } from "../db/read/selectPublishers.js";
import { selectRoles } from "../db/read/selectRoles.js";
import { selectSeries } from "../db/read/selectSeries.js";
import { selectStories } from "../db/read/selectStories.js";

import { logInsertStatement } from "../db/update/logInsertStatement.js";

import { createGenre } from "../db/update/createGenre.js";


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

	console.log(`Normal Page Loaded`);

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

	console.log("publisher done");
	res.redirect("/insert");

});

router.post("/character", (req, res) => {

	console.log("character done");
	res.redirect("/insert");

});

router.post("/comic", (req, res) => {

	

	console.log("comic done");
	res.redirect("/insert");

});

router.post("/genre", (req, res) => {

	createGenre(dbFile, req.body.genreName, req.body.genreDescription);

	if (createGenre == "Failed") {
		console.error("Function returned false");
	} else {
		console.log("Genre sucessfully created!");
	};
	
	res.redirect("/insert");

});


export { router };