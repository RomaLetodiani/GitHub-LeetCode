"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LeetCode_Controller_1 = __importDefault(require("../Controllers/LeetCode.Controller"));
const router = express_1.default.Router();
// LeetCode Routes
// POST /leetcode/profile
router.post("/profile", LeetCode_Controller_1.default.Profile);
// POST /leetcode/calendar
router.post("/calendar", LeetCode_Controller_1.default.Calendar);
exports.default = router;
//# sourceMappingURL=LeetCode.Routes.js.map