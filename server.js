require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

const db = require("./app/models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to parth kharecha application."});
});

require("./app/routes/tutorials.routes")(app);
require("./app/routes/user.routes")(app);

const { API_PORT } = process.env;

// set port, listen for requests
const PORT = process.env.PORT || API_PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
