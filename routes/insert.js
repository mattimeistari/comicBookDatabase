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
import { selectCountries } from "../db/read/selectCountries.js";

import { selectCharacterNames } from "../db/read/selectCharacterNames.js";
import { selectPeopleNames } from "../db/read/selectPeopleNames.js";
import { selectComicNames } from "../db/read/selectComicNames.js";

import { findItemIdByTitle } from "../db/read/findItemIdByTitle.js";

import { createGenre } from "../db/update/createGenre.js";
import { createPublisher } from "../db/update/createPublisher.js";
import { createCharacter } from "../db/update/createCharacter.js";
import { createPerson } from "../db/update/createPerson.js";
import { createSeries } from "../db/update/createSeries.js";
import { createStory } from "../db/update/createStory.js";
import { createImage } from "../db/update/createImage.js";

import { createComic } from "../db/update/comicInserts/createComic.js";
import { createComicCharacter } from "../db/update/comicInserts/comicCharacter.js";
import { createComicGenre } from "../db/update/comicInserts/comicGenre.js";
import { createComicRolePerson } from "../db/update/comicInserts/comicRolePerson.js";
import { createComicSeries } from "../db/update/comicInserts/comicSeries.js";
import { createComicStory } from "../db/update/comicInserts/comicStory.js";

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
	const countries = selectCountries(dbFile);

	const characterArray = selectCharacterNames(dbFile);
	const personArray = selectPeopleNames(dbFile);
	const comicArray = selectComicNames(dbFile);

	const imageDependancies = {
		"Character": "imageCharacter",
		"Person": "imagePerson",
		"Comic": "comics"
	};

	console.log(colors.brightBlue.underline("Normal Page Loaded"));

	res.render("insert", {

		title,
		publishers,
		characters,
		people,
		roles,
		genres,
		series,
		stories,
		imageDependancies,
		countries,
		characterArray,
		personArray,
		comicArray

	});

});

router.post("/publisher", (req, res) => {

	createPublisher(dbFile, req.body.publisherName, req.body.publisherDescription, req.body.publisherCountry);
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

	createPerson(dbFile, req.body.personFirstName, req.body.personLastName, req.body.personCountry);
	console.log(colors.yellow("Person created!"));
	
	res.redirect("/insert");

});

router.post("/series", (req, res) => {

	createSeries(dbFile, req.body.seriesName, req.body.seriesDescription);
	console.log(colors.yellow("Series created!"));
	
	res.redirect("/insert");

});

router.post("/story", (req, res) => {

	createStory(dbFile, req.body.storyTitle, req.body.storyDescription);
	console.log(colors.yellow("Story created!"));

	res.redirect("/insert");

});

router.post("/image", (req, res) => {

	console.log(req.body);

	const keys = Object.keys(req.body);
	const thirdPropertyName = keys[2];
	const thirdPropertyValue = req.body[thirdPropertyName];

	createImage(dbFile, req.body.imageTitle, req.body.imageLink, thirdPropertyValue, thirdPropertyName);

	res.redirect("/insert");

});

// createComic(dbFile, req.body.ISBN, publicationDate, summary, issueNumber, pageCount, price);

// Remember to seperately create file directory from the names of the series and characters and allat.
// Remember to do the tengitöflur with for loop like Jeremias

router.post("/comic", (req, res) => {

	const newComicId = createComic(dbFile, req.body.ISBN, req.body.publicationDate, req.body.summary, req.body.issueNumber, req.body.pageCount, req.body.price, req.body.publisherId);

	const roles = selectRoles(dbFile);
	const roleTypes = roles
		.filter(role => req.body[`${role.title.toLowerCase()}Id`] !== undefined)
		.map(role => role.title);

	console.log(colors.magenta(roleTypes));

	const handleRoleArrays = (roleTypes, reqBody, dbFile, comicId, roles) => {
		roleTypes.forEach(roleType => {
			const peopleArray = reqBody[`${roleType.toLowerCase()}Id`];

			console.log(colors.bgRed(peopleArray));

			if (peopleArray) {
				const roleId = findItemIdByTitle(roles, roleType);

				for (let i = 0; i < peopleArray.length; i++) {
					createComicRolePerson(dbFile, comicId, roleId, peopleArray[i]);
				}
			}
		});
	};

	handleRoleArrays(roleTypes, req.body, dbFile, newComicId, roles);


	if (req.body.characterId) {
		for (let i = 0; i < req.body.characterId.length; i++) {
			createComicCharacter(dbFile, newComicId, req.body.characterId[i]);
		}
	}

	// REMEMVER TO FIX THIS SHIT

	//if (req.body.publisherId) {
	//	for (let i = 0; i < req.body.publisherId.length; i++) {
	//		createComicCharacter(dbFile, newComicId, req.body.publisherId[i]);
	//	}
	//}

	if (req.body.genreId) {
		for (let i = 0; i < req.body.genreId.length; i++) {
			createComicGenre(dbFile, newComicId, req.body.genreId[i]);
		}
	}

	if (req.body.seriesId) {
		for (let i = 0; i < req.body.seriesId.length; i++) {
			createComicSeries(dbFile, newComicId, req.body.seriesId[i]);
		}
	}
	
	if (req.body.storyId) {
		for (let i = 0; i < req.body.storyId.length; i++) {
			createComicStory(dbFile, newComicId, req.body.storyId[i]);
		}
	}
	
	res.redirect("/insert");

});

export { router };