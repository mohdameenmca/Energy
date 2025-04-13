const express = require("express");
const {showreadings,updateRead} = require("../Controllers/readController");
const router = express.Router();

router.route("/readings/:userEmail").put(updateRead);
router.route("/showreadings/:userEmail").get(showreadings);

module.exports=router;