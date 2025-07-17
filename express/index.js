const express = require("express");
const app = express();
const fs = require("fs");
const { MongoClient } = require("mongodb");
const path = require("path");

//get the text file data
app.get("/", (req, res) => {
  const filepath = path.join(__dirname, "file", "file1.txt");
  fs.readFile(filepath, "utf-8", (error, data) => {
    if (error) {
      return res.status(500).send("Error reading file");
    }
    res.send(data);
  });
});

//get json file data
app.get("/json", (req, res) => {
  const filepath = path.join(__dirname, "file", "file1.json");
  fs.readFile(filepath, "utf-8", (error, data) => {
    if (error) {
      return res.status(500).send("Error reading file");
    }
    // res.send(JSON.parse(data));    // normal get the json data
    try {
      const jsonData = JSON.parse(data);

      // #map use for array of objects
      // #get the whole json data
      //   const userData = jsonData.map((item) => item);

      // #get the user data by the user object
      //   const userData = jsonData.map((item) => item.user);

      // #get the user data by the user id
      const userData = jsonData.map((item) => item.user.id);
      res.json(userData);
    } catch (parseError) {
      return res.status(500).send("Error parsing JSON");
    }
  });
});

const url = "mongodb://localhost:27017/";
const dbName = "local";
const collectionName = "user_collection";

const client = new MongoClient(url);

app.get("/users", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    // #map use for array of objects
    const users = await collection.find({}).toArray();

    // #get the user ids
    const userIds = users.map((user) => user.user_id);

    res.json({ userIds, users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
});

app.listen(3000);
