import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(
    {path: './.env'}
);


connectDB();




















// (async () => {
//   try {
//     await mongoose.connect(
//      `${process.env.MONGODB_URL}/${DB_NAME}`
//     )
//     app.on("error", (error) => {
//       console.error("Error connecting to MongoDB:", error);
//       throw error; // Rethrow the error to be caught by the outer catch block
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//     console.log("Connected to MongoDB");


//   } catch (error) {
//     console.error("Failed to connect to MongoDB:", error);
//     throw error; // Rethrow the error to be caught by the outer catch block
//   }
// })();