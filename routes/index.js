import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// get index page
router.get("/", (req, res) => {

	const title = "💀💀💀";
    
	res.render("index", {

		title,
		
	});

});

export { router };