import { j as json } from "../../../../chunks/index.js";
import { d as dbClient } from "../../../../chunks/dbClient.js";
async function GET() {
  const client = await dbClient;
  const db = client.db("user");
  const collection = db.collection("user");
  let result = await collection.find({}).toArray();
  return json(result);
}
export {
  GET
};
