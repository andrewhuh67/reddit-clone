const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/login", controller.getLogin);

module.exports = router;