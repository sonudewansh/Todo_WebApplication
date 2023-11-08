// // Checking GET api is working

// import { json } from '@sveltejs/kit';

// export async function GET({request}) {
//     return json({
//         "message": "GET api working Well!"
//     })
// }




// // Checking POST api is working

// import { json } from '@sveltejs/kit';

// export async function POST({request}) {
//     const {title} = await request.json()
//     console.log("Title:", title);
//     return json({
//         "message":"POST api working well!"
//     })

// }




// import { json } from '@sveltejs/kit';
// import dbClient from '../../../db/dbClient.js';


// export async function POST({request}) {

//     const client = await dbClient       //dbClient is from db folder

//     //connection with database
//     const db = client.db("sveltekit_db")        //sveltekit_db is name of database from mongodb
//     // console.log(client,"amit")

//     //collection with collection
//     const collection = db.collection("todos")       //todos is the name of collection from mongodb
//     // console.log(client,"amit")

//     const {title} = await request.json()
//     console.log("Title:", title);
    
//     //Insert into Collection
//     const todo = await collection.insertOne({"Title:": title})       
//     console.log("Todo:", todo);

//     return json({
//         "message":"POST api working well!"
//     })
// }



import { json } from '@sveltejs/kit';
import dbClient from '../../../db/dbClient.js';


export async function POST({request}) {

    const client = await dbClient
    
    const db = client.db("todo_signup_login")
    const collection = db.collection("todo")

    const {title} = await request.json()
    console.log("Title:", title);
    
    const todo = await collection.insertOne({"title": title})

    //Display id into collection
    const find_todo = await collection.findOne({"_id":todo.insertedId})
    return json(find_todo)
}





