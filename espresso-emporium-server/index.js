require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.COFFEE_DB_URI, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
});

async function run() {
   try {
      await client.connect();

      const coffeeCollection = client.db("coffeeDB").collection("coffees");
      const usersCollection = client.db("coffeeDB").collection("users");

      // Coffee related APIS
      app.get("/coffees", async (req, res) => {
         const result = await coffeeCollection.find().toArray();
         res.send(result);
      });

      app.get("/coffees/:id", async (req, res) => {
         const { id } = req.params;
         const query = new ObjectId(id);
         const result = await coffeeCollection.findOne(query);
         res.send(result);
      });

      app.post("/coffees", async (req, res) => {
         const newCoffee = req.body;
         const result = await coffeeCollection.insertOne(newCoffee);
         res.send(result);
      });

      app.patch("/coffees/:id", async (req, res) => {
         const { id } = req.params;
         const filter = { _id: new ObjectId(id) };
         const options = { upsert: true };
         const updatedCoffee = req.body;
         const updatedDoc = {
            $set: updatedCoffee,
         };
         const result = await coffeeCollection.updateOne(
            filter,
            updatedDoc,
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

      // User related APIS
      app.get("/users", async (req, res) => {
         const result = await usersCollection.find().toArray();
         res.send(result);
      });

      app.post("/users", async (req, res) => {
         const userProfile = req.body;
         const result = await usersCollection.insertOne(userProfile);
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
   res.send("Espresso Emporium server is running...");
});

app.listen(port, () => {
   console.log(`Espresso Emporium server listen on port ${port}`);
});
