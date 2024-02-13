import express from "express"; 
import mongoose from "mongoose"; 
import authRoutes from "./routes/auth"; 
import todoRoutes from "./routes/todo"; 
import cors from "cors"; 
import path from "path";

const PORT = 3000; 
const app = express(); 
app.use(cors()); 
app.use(express.json());  
app.use("/auth", authRoutes); 
app.use("/todo", todoRoutes); 

app.use(express.static("public"));
app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

mongoose.connect('mongodb+srv://dizzywebbeb:wzyQ3OoK0TmH3ujX@cluster0.ygharhl.mongodb.net/', { dbName: "TodoProjGhub" }); 

app.listen(PORT, () => {
    console.log(`Example app is listening at http://localhost:${PORT}`)
}); 

// show collections / show tables => shows all the models  
// db.getCollection('admins').find();  => specifically select the model and .query 

// db.getCollection('users).find(); => specifically select the model and .query 

// db.getCollection('todos').find() => specifically select the model and .query 

// db.getCollection('courses').find() => 

// db.getCollection('sessions').find(); => specifically selecct the model and .query 

// "tsc -b && pm2 start dist/index.js"

// cd ../client && npm run build && rm -rf ../server/public && mkdir -p ../server/public && mv ./dist/* ../server/public && cd ../server && tsc -b && node dist/index.js