import { j as json } from "../../../../chunks/index.js";
import { d as dbClient } from "../../../../chunks/dbClient.js";
async function GET() {
  const client = await dbClient;
  const db = client.db("todo_signup_login_registration");
  const collection = db.collection("register");
  let result = await collection.find({}).toArray();
  return json(result);
}
export {
  GET
};
