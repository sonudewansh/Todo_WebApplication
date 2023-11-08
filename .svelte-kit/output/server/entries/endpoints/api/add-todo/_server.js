import { j as json } from "../../../../chunks/index.js";
import { d as dbClient } from "../../../../chunks/dbClient.js";
async function POST({ request }) {
  const client = await dbClient;
  const db = client.db("todo_signup_login");
  const collection = db.collection("todo");
  const { title } = await request.json();
  console.log("Title:", title);
  const todo = await collection.insertOne({ "title": title });
  const find_todo = await collection.findOne({ "_id": todo.insertedId });
  return json(find_todo);
}
export {
  POST
};
