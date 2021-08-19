module.exports = app => {
    const ctr = require("../controllers/user.controller.js");

    var router = require("express").Router();

// Create a new Tutorial
    router.post("/register", ctr.register);

// Retrieve all Tutorials
    router.post("/login", ctr.login);

    app.use('/api/user', router);
}
