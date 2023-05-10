const express = require("express");
const cors = require("cors");
const operators = require("../src/controllers/operators");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", operators);


app.listen(3000, () => {
    console.log("Calculator app listening on port 3000")
});