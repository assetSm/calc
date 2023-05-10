const express = require("express");

const router = express.Router();

router.get("/add/:num1/:num2", async (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        const result = num1 + num2;
        res.send(result.toString());
    }  catch (e) {
        res.status(400).send(e)
    }
});

router.get("/subtract/:num1/:num2", async (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        const result = num1 - num2;
        res.send(result.toString());
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/multiply/:num1/:num2", async (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        const result = num1 * num2;
        res.send(result.toString());
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/divide/:num1/:num2", async (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        const result = num1 / num2;
        res.send(result.toString());
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;