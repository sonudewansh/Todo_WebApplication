import { j as json } from "../../../../chunks/index.js";
import { d as dbClient } from "../../../../chunks/dbClient.js";
async function POST({ request }) {
  const client = await dbClient;
  const db = client.db("todo_signup_login_registration");
  const collection = db.collection("register");
  const requestData = await request.json();
  const { Firstname, Lastname, Username, Password } = requestData;
  console.log("Firstname:", Firstname);
  console.log("Lastname:", Lastname);
  console.log("Username:", Username);
  console.log("Password:", Password);
  const result = await collection.insertOne({ Firstname, Lastname, Username, Password });
  console.log("Inserted Document ID:", result.insertedId);
  console.log("Inserted Document ID:", result.insertedId.toString());
  return json({
    message: "POST API is working well!",
    id: result.insertedId.toString()
  });
}
export {
  POST
};
