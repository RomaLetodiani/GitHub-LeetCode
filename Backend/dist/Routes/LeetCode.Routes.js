"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var LeetCode_Controller_1 = __importDefault(require("../Controllers/LeetCode.Controller"));
var router = express_1.default.Router();
// LeetCode Routes
// POST /leetcode/profile
router.post("/profile", LeetCode_Controller_1.default.Profile);
// POST /leetcode/calendar
router.post("/calendar", LeetCode_Controller_1.default.Calendar);
exports.default = router;
