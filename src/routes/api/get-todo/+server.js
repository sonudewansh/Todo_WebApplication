import { json } from '@sveltejs/kit';
import dbClient from '../../../db/dbClient.js';


export async function GET() {
    const client = await dbClient

    //Connection with database
    const db = client.db("todo_signup_login")

    //Connection with collection
    const collection = db.collection("todo")

    let todo = await collection.find({}).toArray()
    return json(todo)

}