import { json } from '@sveltejs/kit';
import dbClient from '../../../db/dbClient.js';

export async function POST({ request }) {
    const client = await dbClient; // dbClient is from the db folder

    // Connect to the database
    const db = client.db("registration"); // 'todo_signup_login_registration' is the name of the database in MongoDB

    // Access the collection
    const collection = db.collection("register"); // 'register' is the name of the collection in MongoDB
    

    // Parse the request body as JSON
    const requestData = await request.json();

    // Extract the firstname, lastname, username, password from the request data
    const { Firstname, Lastname, Username, Password} = requestData;
    console.log("Firstname:", Firstname);
    console.log("Lastname:", Lastname);
    console.log("Username:", Username);
    console.log("Password:", Password);
    

    // Insert into the collection
    const result = await collection.insertOne({ Firstname, Lastname, Username, Password});
    console.log("Inserted Document ID:", result.insertedId);
    console.log("Inserted Document ID:", result.insertedId.toString());

    return json({
        message: "POST API is working well!",
        id: result.insertedId.toString()
    });

}
