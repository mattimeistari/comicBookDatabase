import express from "express";
import bcrypt from "bcrypt";
import path from "path";
import { fileURLToPath } from "url";
import { createUsers } from "../db/update/users/registerUser.js";

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/comicBook.db");

// get register page
router.get("/", (req, res) => {

	const title = "🕸️🕸️🕸️";

	const header = "sign up";

	res.render("register", {
		title,
		header
	});

});


router.post("/", (req, res) => {
	const passwordHash = bcrypt.hashSync(req.body.password, 10);
	createUsers(dbFile,req.body.username, req.body.email, passwordHash);

	res.redirect("/");
});

// Export the router
export { router };