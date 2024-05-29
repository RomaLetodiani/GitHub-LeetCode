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
Object.defineProperty(exports, "__esModule", { value: true });
const Axios_1 = require("../Utils/Axios");
class GitHubServices {
    constructor() {
        this.getProfile = (userName) => __awaiter(this, void 0, void 0, function* () {
            const query = `
      query ($userName: String! ) {
        user(login: $userName) {
          contributionsCollection {
            contributionCalendar {
              totalContributions  # Total contributions
            }
          }
          repositories {
            totalCount  # Total number of repositories
          }
          twitterUsername  # Twitter handle
          bio  # Bio
          websiteUrl  # Website URL (if provided)
          company  # Company (if provided)
          email  # Email (if provided)
          location  # Location (if provided)
          avatarUrl  # Avatar URL
        }
      }
    `;
            const variables = { userName };
            try {
                const response = yield Axios_1.githubAPI.post("", { query, variables });
                if (response.data.errors) {
                    console.error("GraphQL errors:", response.data.errors);
                    throw new Error(response.data.errors[0].message || "An unexpected error occurred");
                }
                const { data } = response;
                return data.data.user;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                throw new Error("An unexpected error occurred");
            }
        });
        this.getCalendar = (userName_1, ...args_1) => __awaiter(this, [userName_1, ...args_1], void 0, function* (userName, year = 2024) {
            const query = `query ($userName: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $userName) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
            totalContributions
              weeks {
                contributionDays {
                  count: contributionCount  # Renamed for clarity
                  date
                }
              }
            }
          }
        }
      }`;
            const variables = { userName, from: `${year}-01-01T00:00:00Z`, to: `${year}-12-31T23:59:59Z` };
            try {
                const response = yield Axios_1.githubAPI.post("", { query, variables });
                if (response.data.errors) {
                    console.error("GraphQL errors:", response.data.errors);
                    throw new Error(response.data.errors[0].message || "An unexpected error occurred");
                }
                const { data } = response;
                return data.data.user;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                throw new Error("An unexpected error occurred");
            }
        });
    }
}
exports.default = GitHubServices;
//# sourceMappingURL=GitHub.Service.js.map