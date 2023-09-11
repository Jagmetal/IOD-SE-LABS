import express from "express";
import { GamesService } from "./services/games-service.js";
GamesService

const app = express();

const gamesService = new GamesService();

app.get("/", (req, res) => {
    res.send("I got your request mate.");
})

const products = ["judo, boxing, karate"];

app.get("/products", (req, res) => {
    res.json(products);
})

app.get("/games", (req, res) => {
    const games = gamesService.getAllGames();
    res.json(games);
})

app.listen(3000, function() {
    console.log("I am hearing your port request.");
}) 