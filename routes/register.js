import express from "express";
import bcrypt from "bcrypt";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

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

	res.redirect("/");

});

// Export the router
export { router };