const express = require("express");
const {energyBill ,showBillsByEmail,dueApproval,showBills}= require("../Controllers/billsController");
const router = express.Router();

router.route("/generateNewBill").post(energyBill);
router.route("/ShowPreviousBills/:userEmail").get(showBillsByEmail);
router.route("/showbills/:billNo").get(showBills);

router.route("/approveDue/:billNo").put(dueApproval);

module.exports=router;