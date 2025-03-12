const express = require("express");
const router = express.Router();
const animalSchema = require("../models/animal");

// New animal
router.post("/animals", (req, res) => {

    const animal = animalSchema(req.body);
    animal
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

module.exports = router;