import dotenv from "dotenv";
import {app} from "./app.js";
import {connectDB} from "./db/index.js";

//  Load environment variables
dotenv.config({
  path: "./.env",
});

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running on port ${process.env.PORT || 4000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed: ", err.message);
    process.exit(1);
  });
