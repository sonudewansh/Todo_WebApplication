import { json } from '@sveltejs/kit';
import dbClient from '../../../db/dbClient.js';


export async function GET() {
    const client = await dbClient; // dbClient is from the db folder

    // Connect to the database
    const db = client.db("sveltekit_db"); // 'todo_signup_login_registration' is the name of the database in MongoDB

    // Access the collection
    const collection = db.collection("register"); // 'register' is the name of the collection in MongoDB


    let result = await collection.find({}).toArray()
    return json(result)

}