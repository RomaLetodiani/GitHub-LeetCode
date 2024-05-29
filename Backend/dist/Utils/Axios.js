"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubAPI = void 0;
var axios_1 = __importDefault(require("axios"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var token = process.env.GITHUB_TOKEN;
exports.githubAPI = axios_1.default.create({
    baseURL: "https://api.github.com/graphql",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(token),
    },
});
