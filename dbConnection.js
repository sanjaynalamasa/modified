const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://sanjaynalamasa:9963324060%40@cluster0.c3msn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");

        const database = client.db('event-registration');
        const collection = database.collection('Registration');

        const documents = await collection.find({}).toArray();
        console.log("Documents:", documents);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
}

connectToDatabase();
