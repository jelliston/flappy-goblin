const envConfig = require("dotenv").config();
const express = require("express");
const ably = require("ably");
const { request } = require("http");

const app = express();
app.use(express.static("public"));

/*If I get a request to the root folder, send index.html back*/
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
});

const listener = app.listen(process.env.PORT, () => {
    console.log("App is listening on port " + listener.address().port);
});