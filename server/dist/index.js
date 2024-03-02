"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = __importDefault(require("./routes/auth"));
const todo_1 = __importDefault(require("./routes/todo"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const PORT = 4000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/auth", auth_1.default);
app.use("/todo", todo_1.default);
app.use(express_1.default.static("public"));
app.use("/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "/public/index.html"));
});
mongoose_1.default.connect('mongodb+srv://dizzywebbeb:wzyQ3OoK0TmH3ujX@cluster0.ygharhl.mongodb.net/', { dbName: "TodoProjGhub" });
app.listen(PORT, () => {
    console.log(`Example app is listening at http://localhost:${PORT}`);
});
// show collections / show tables => shows all the models  
// db.getCollection('admins').find();  => specifically select the model and .query 
// db.getCollection('users).find(); => specifically select the model and .query 
// db.getCollection('todos').find() => specifically select the model and .query 
// db.getCollection('courses').find() => 
// db.getCollection('sessions').find(); => specifically selecct the model and .query 
// "tsc -b && pm2 start dist/index.js"
// cd ../client && npm run build && rm -rf ../server/public && mkdir -p ../server/public && mv ./dist/* ../server/public && cd ../server && tsc -b && node dist/index.js
