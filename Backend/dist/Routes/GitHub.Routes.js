"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GitHub_Controller_1 = __importDefault(require("../Controllers/GitHub.Controller"));
const router = express_1.default.Router();
// GitHub Routes
// POST /github/profile
router.post("/profile", GitHub_Controller_1.default.Profile);
// POST /github/calendar
router.post("/calendar", GitHub_Controller_1.default.Calendar);
exports.default = router;
//# sourceMappingURL=GitHub.Routes.js.map