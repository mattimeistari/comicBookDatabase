import express from "express";
import path from "path";
import colors from "colors";
import fs from "fs";
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
import { createPerson } from "../db/update/createPerson.js";
import { createSeries } from "../db/update/createSeries.js";

import { createComic } from "../db/update/comicInserts/createComic.js";

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
	console.log(colors.yellow("character created!"));

	res.redirect("/insert");

});

router.post("/genre", (req, res) => {

	createGenre(dbFile, req.body.genreName, req.body.genreDescription);
	console.log(colors.yellow("Genre created!"));

	res.redirect("/insert");

});

router.post("/person", (req, res) => {

	createPerson(dbFile, req.body.personFirstName, req.body.personLastName);
	console.log(colors.yellow("Person created!"));
	
	res.redirect("/insert");

});

router.post("/series", (req, res) => {

	createSeries(dbFile, req.body.seriesName, req.body.seriesDescription);
	console.log(colors.yellow("Series created!"));
	
	res.redirect("/insert");

});

// createComic(dbFile, req.body.ISBN, publicationDate, summary, issueNumber, pageCount, price);

// Remember to seperately create file directory from the names of the series and characters and allat.
// Remember to do the tengitöflur with for loop like Jeremias

router.post("/comic", (req, res) => {

	console.log(req.body);

	createComic(dbFile, req.body.ISBN, req.body.publicationDate, req.body.summary, req.body.issueNumber, req.body.pageCount, req.body.price);
	
	res.redirect("/insert");
});

export { router };