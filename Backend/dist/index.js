"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var LeetCode_Routes_1 = __importDefault(require("./Routes/LeetCode.Routes"));
var GitHub_Routes_1 = __importDefault(require("./Routes/GitHub.Routes"));
// Create an Express application
var app = (0, express_1.default)();
// Load environment variables from .env file
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Define the default route
app.get("/", function (req, res) {
    res.send("Welcome to the backend server");
});
// Import the routes
app.use("/leetcode", LeetCode_Routes_1.default);
app.use("/github", GitHub_Routes_1.default);
// Start the server
var PORT = process.env.PORT || 5050;
app.listen(PORT, function () {
    if (process.env.NODE_ENV === "development") {
        console.log("Server is running on port http://localhost:".concat(PORT));
    }
});
