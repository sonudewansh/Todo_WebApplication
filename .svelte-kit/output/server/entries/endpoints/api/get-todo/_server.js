import { j as json } from "../../../../chunks/index.js";
import { d as dbClient } from "../../../../chunks/dbClient.js";
async function GET() {
  const client = await dbClient;
  const db = client.db("todo_signup_login");
  const collection = db.collection("todo");
  let todo = await collection.find({}).toArray();
  return json(todo);
}
export {
  GET
};
