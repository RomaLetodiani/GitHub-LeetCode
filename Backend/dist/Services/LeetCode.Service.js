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
const axios_1 = __importDefault(require("axios"));
class LeetCodeServices {
    constructor() {
        this.getProfile = (userName) => __awaiter(this, void 0, void 0, function* () {
            const query = `
      query ($userName: String!) {
        matchedUser(username: $userName) {
          username
          githubUrl
          twitterUrl
          linkedinUrl
          profile {
            userAvatar
            realName
            aboutMe
            location
          }
        }
      }
    `;
            const variables = { userName };
            try {
                const response = yield axios_1.default.post("https://leetcode.com/graphql/", { query, variables }, {
                    headers: {
                        "Content-Type": "application/json",
                        referer: `https://leetcode.com/${userName}/`,
                    },
                });
                if (response.data.errors) {
                    console.error("GraphQL errors:", response.data.errors);
                    throw new Error(response.data.errors[0].message || "An unexpected error occurred");
                }
                const { data } = response;
                return data.data.matchedUser;
            }
            catch (error) {
                console.error("🚀 ~ LeetCodeServices ~ getProfile ~ error:", error);
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                throw new Error("An unexpected error occurred");
            }
        });
        this.getCalendar = (userName_1, ...args_1) => __awaiter(this, [userName_1, ...args_1], void 0, function* (userName, year = 2024) {
            const query = `query ($userName: String!, $year: Int!) {
      matchedUser(username: $userName) {
        userCalendar(year: $year) {
          activeYears
          streak
          totalActiveDays
          dccBadges {
            timestamp
            badge {
              name
              icon
            }
          }
          submissionCalendar
        }
      }
    }`;
            const variables = { userName, year };
            try {
                const response = yield axios_1.default.post("https://leetcode.com/graphql/", { query, variables }, {
                    headers: {
                        "Content-Type": "application/json",
                        referer: `https://leetcode.com/${userName}/`,
                    },
                });
                if (response.data.errors) {
                    console.error("GraphQL errors:", response.data.errors);
                    throw new Error(response.data.errors[0].message || "An unexpected error occurred");
                }
                const { data } = response;
                return data.data.matchedUser.userCalendar;
            }
            catch (error) {
                console.error("🚀 ~ LeetCodeServices ~ getCalendar ~ error:", error);
                throw new Error("An unexpected error occurred");
            }
        });
    }
}
exports.default = LeetCodeServices;
//# sourceMappingURL=LeetCode.Service.js.map