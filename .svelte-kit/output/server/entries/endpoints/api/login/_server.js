import { j as json } from "../../../../chunks/index.js";
import { d as dbClient } from "../../../../chunks/dbClient.js";
async function POST({ request }) {
  const client = await dbClient;
  const db = client.db("todo_signup_login_registration");
  const collection = db.collection("register");
  const requestData = await request.json();
  const { Username, Password } = requestData;
  console.log(Username, Password);
  try {
    const user = await collection.findOne({ Username, Password });
    console.log(user);
    if (user) {
      return json({ success: true, message: "Login successful", id: user._id });
    } else {
      return json({ success: false, error: "Invalid userid and password" });
    }
  } catch (error) {
    console.error("An error occurred during login:", error);
    return json({ success: false, error: "Internal server error" });
  }
}
export {
  POST
};
