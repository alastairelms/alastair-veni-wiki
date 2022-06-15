const express = require("express");
const app = express();

const getFilmsSearch = async (request, response) => {
    const url = `https://www.omdbapi.com/?apikey=8e56ab22&t=batman`;

    const result = await fetch(url).catch((error) =>
        console.log("getFilmsSearch error:", error)
    );

    const resultAsJson = await result.json();
    response.status(200).json(resultAsJson);
};

app.get("/", (request, response) => {
	response.status(200).send("Hello World");
});

app.get("/data", getFilmsSearch)

// star wars films object
// https://www.omdbapi.com/?apikey=8e56ab22&s=star
// want to console log data from async fetch

module.exports = app;
