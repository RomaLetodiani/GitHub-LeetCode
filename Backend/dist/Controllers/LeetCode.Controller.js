"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LeetCode_Service_1 = __importDefault(require("../Services/LeetCode.Service"));
class LeetCodeController {
    constructor() {
        this.Profile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { userName } = req.body;
            if (!userName) {
                return res.status(400).json({ message: "Please provide a valid username" });
            }
            try {
                const profile = yield this.LeetCodeServices.getProfile(userName);
                if (!profile) {
                    throw new Error("User not found");
                }
                return res.status(200).json(profile);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                return res.status(500).json({ message: "An unexpected error occurred" });
            }
        });
        this.Calendar = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { userName, year } = req.body;
            if (!userName) {
                return res.status(400).json({ message: "Please provide a valid username" });
            }
            if (year && typeof year !== "number") {
                return res.status(400).json({ message: "Please provide a valid year" });
            }
            try {
                const calendar = yield this.LeetCodeServices.getCalendar(userName, year);
                return res.status(200).json(calendar);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                return res.status(500).json({ message: "An unexpected error occurred" });
            }
        });
        this.LeetCodeServices = new LeetCode_Service_1.default();
    }
}
exports.default = new LeetCodeController();
//# sourceMappingURL=LeetCode.Controller.js.map