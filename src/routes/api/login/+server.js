import { json } from '@sveltejs/kit';
import dbClient from '../../../db/dbClient.js';

export async function POST({ request }) {
    const client = await dbClient; // dbClient is from the db folder

    // Connect to the database
    const db = client.db("user"); // 'todo_signup_login_registration' is the name of the database in MongoDB

    // Access the collection
    const collection = db.collection("user"); // 'register' is the name of the collection in MongoDB
    const requestData = await request.json();

    const {Username, Password} = requestData
    console.log(Username,Password);

        try {
            const user = await collection.findOne({ Username, Password });
            console.log(user);
            if (user) {
                return json({ success: true, message: 'Login successful', id:user._id });
            } else {
                return json ({ success: false, error: "Invalid userid and password"});
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            return json ({ success: false, error: 'Internal server error' })
        }
}











// import { json } from '@sveltejs/kit';
// import dbClient from '../../../db/dbClient.js';

// export async function POST(request) {
//     console.log("Request:", request);
//     const { username, password } = request.body;
//     const client = await dbClient; // dbClient is from the db folder

//     // Connect to the database
//     const db = client.db("registration"); // 'registration' is the name of the database in MongoDB

//     // Access the collection
//     const collection = db.collection("register"); // 'register' is the name of the collection in MongoDB

//     try {
//         const user = await collection.findOne({ username, password });

//         if (user) {
//             return json({
//                 status: 200,
//                 body: {
//                     success: true,
//                     message: 'Login successful',
//                     id: user._id
//                 }
//             });
//         } else {
//             return json({
//                 status: 401,
//                 body: {
//                     success: false,
//                     error: 'Invalid credentials'
//                 }
//             });
//         }
//     } catch (error) {
//         console.error('An error occurred during login:', error);
//         return json({
//             status: 500,
//             body: {
//                 success: false,
//                 error: 'Internal server error'
//             }
//         });
//     }
// }





