// const express = require("express")
// const router = express.Router();
// const registerProfile = require('../Controllers/profileController')

// router.route("/registeruser").post(registerProfile);

// module.exports=router;


// routes/profile.js
const express = require("express");
const router = express.Router();
const {registerProfile,getProfile} = require('../Controllers/profileController'); // Ensure correct path

router.route("/registeruser").post(registerProfile);
router.route("/getProfile/:email").get(getProfile);


module.exports = router;
