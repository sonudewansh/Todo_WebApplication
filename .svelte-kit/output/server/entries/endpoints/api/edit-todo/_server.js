import { j as json } from "../../../../chunks/index.js";
import { d as dbClient } from "../../../../chunks/dbClient.js";
import { ObjectId } from "mongodb";
async function POST({ request }) {
  const client = await dbClient;
  const db = client.db("todo_signup_login");
  const collection = db.collection("todo");
  const { id, title } = await request.json();
  console.log("Id:", id);
  const find_todo_by_id = await collection.findOne({ "_id": new ObjectId(id) });
  console.log("Find_todo_by_id:", find_todo_by_id);
  if (!find_todo_by_id) {
    return json({
      "Error": "Todo Not Found !"
    });
  }
  await collection.updateOne({ _id: new ObjectId(id) }, {
    $set: {
      title
    }
  });
  return json({
    "Message": "Todo is Updated",
    "Id": id,
    "Title": title
  });
}
export {
  POST
};
