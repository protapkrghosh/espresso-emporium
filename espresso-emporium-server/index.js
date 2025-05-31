const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URI, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
});

async function run() {
   try {
      // await client.connect();

      const database = client.db("espressoDB");
      const coffeeCollection = database.collection("coffees");

      app.get("/coffees", async (req, res) => {
         const result = await coffeeCollection.find().toArray();
         res.send(result);
      });

      app.get("/coffees/:id", async (req, res) => {
         const { id } = req.params;
         const query = { _id: new ObjectId(id) };
         const result = await coffeeCollection.findOne(query);
         res.send(result);
      });

      app.post("/coffees", async (req, res) => {
         const newCoffee = req.body;
         const result = await coffeeCollection.insertOne(newCoffee);
         res.send(result);
      });

      app.put("/coffees/:id", async (req, res) => {
         const { id } = req.params;
         const filter = { _id: new ObjectId(id) };
         const options = { upsert: true };
         const updatedCoffee = req.body;
         const updateDoc = {
            $set: updatedCoffee,
         };
         const result = await coffeeCollection.updateOne(
            filter,
            updateDoc,
            options
         );
         res.send(result);
      });

      app.delete("/coffees/:id", async (req, res) => {
         const { id } = req.params;
         const query = { _id: new ObjectId(id) };
         const result = await coffeeCollection.deleteOne(query);
         res.send(result);
      });

      await client.db("admin").command({ ping: 1 });
      console.log(
         "Pinged your deployment. You successfully connected to MongoDB!"
      );
   } finally {
      // await client.close();
   }
}
run().catch(console.dir);

app.get("/", (req, res) => {
   res.send("Espresso Emporium server is getting hotter");
});

app.listen(port, () => {
   console.log(`Espresso Emporium server is running on port ${port}`);
});
