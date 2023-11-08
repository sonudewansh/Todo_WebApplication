import { MongoClient } from 'mongodb';

// const uri = "mongodb://localhost:27017";
const uri = "mongodb+srv://sonudewansh:Andal123@cluster1.fubvuzs.mongodb.net/?retryWrites=true&w=majority";

const dbClient = new MongoClient(uri);

async function run() {
    try {
        await dbClient.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
}

run().catch(console.dir);

export default dbClient;