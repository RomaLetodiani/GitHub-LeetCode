"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const LeetCode_Routes_1 = __importDefault(require("./Routes/LeetCode.Routes"));
const GitHub_Routes_1 = __importDefault(require("./Routes/GitHub.Routes"));
// Create an Express application
const app = (0, express_1.default)();
// Load environment variables from .env file
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// TODO: Add a middleware to log all the incoming requests
// TODO: Deploy Code on Vercel
// Define the default route
app.get("/", (req, res) => {
    res.send("Welcome to the backend server");
});
// Import the routes
app.use("/leetcode", LeetCode_Routes_1.default);
app.use("/github", GitHub_Routes_1.default);
// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    if (process.env.NODE_ENV === "development") {
        console.log(`Server is running on port http://localhost:${PORT}`);
    }
});
//# sourceMappingURL=index.js.map