import express from "express";
import bcrypt from "bcrypt";
import path from "path";
import { fileURLToPath } from "url";
import { readUser } from "../db/read/users/readUserData.js";

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/comicBook.db");

// get register page
router.get("/", (req, res) => {

	const title = "😈😈😈";
    
	const header = "log in";

	const user = readUser(dbFile, req.body.username);
	res.render("login", {
		title,
		header,
		user
	});

});

router.post("/", (req, res) => {

	const user = readUser(dbFile, req.body.username);

	if (user) {

		const passwordMatch = bcrypt.compareSync(req.body.password, user.password);

		if (passwordMatch) {

			req.session.user = user;
			console.log("asddsasdsadasd");
			req.session.isLoggedIn = true;

			console.log(req.session.isLoggedIn);

			res.redirect("/");
			return;

		} else {

			console.log("blud no work");
			res.redirect("/login");

		}
		
	}});

// Export the router
export { router };