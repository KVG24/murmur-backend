const express = require("express");

// Initiate main express app
const app = express();

// Parsing json and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Live app in localhost
app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log("app listening on port 3000!");
    console.log("___________________________");
});
