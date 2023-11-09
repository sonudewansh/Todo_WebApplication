import { json } from '@sveltejs/kit';
import dbClient from '../../../db/dbClient.js';


export async function GET() {
    const client = await dbClient

    //Connection with database
    const db = client.db("sveltekit_db")

    //Connection with collection
    const collection = db.collection("todos")

    let todo = await collection.find({}).toArray()
    return json(todo)

}