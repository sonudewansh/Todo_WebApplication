import { json } from '@sveltejs/kit';
import dbClient from '../../../db/dbClient.js';
import { ObjectId } from 'mongodb';



export async function POST({request}) {
    const client = await dbClient

    //Connection with database
    const db = client.db("todo_signup_login")

    //Connection with collection
    const collection = db.collection("todo")

    //Taking id bcz, it is unique
    const {id, title} = await request.json()
    console.log("Id:", id);

    //Finding by id
    const find_todo_by_id = await collection.findOne({"_id":new ObjectId(id)})
    console.log("Find_todo_by_id:", find_todo_by_id);

    if (!find_todo_by_id) {
        return json({
            "Error":"Todo Not Found !"
        })
    }

    //Updating by id
    await collection.updateOne({_id: new ObjectId(id)}, {
        $set: {
            title:title
        }
    })
    return json({
        "Message":"Todo is Updated",
        "Id":id,
        "Title":title
    })
}