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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Axios_1 = require("../Utils/Axios");
var GitHubServices = /** @class */ (function () {
    function GitHubServices() {
        var _this = this;
        this.getProfile = function (userName) { return __awaiter(_this, void 0, void 0, function () {
            var query, variables, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n      query ($userName: String! ) {\n        user(login: $userName) {\n          contributionsCollection {\n            contributionCalendar {\n              totalContributions  # Total contributions\n            }\n          }\n          repositories {\n            totalCount  # Total number of repositories\n          }\n          twitterUsername  # Twitter handle\n          bio  # Bio\n          websiteUrl  # Website URL (if provided)\n          company  # Company (if provided)\n          email  # Email (if provided)\n          location  # Location (if provided)\n          avatarUrl  # Avatar URL\n        }\n      }\n    ";
                        variables = { userName: userName };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Axios_1.githubAPI.post("", { query: query, variables: variables })];
                    case 2:
                        response = _a.sent();
                        if (response.data.errors) {
                            console.error("GraphQL errors:", response.data.errors);
                            throw new Error(response.data.errors[0].message || "An unexpected error occurred");
                        }
                        data = response.data;
                        return [2 /*return*/, data];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1 instanceof Error) {
                            throw new Error(error_1.message);
                        }
                        throw new Error("An unexpected error occurred");
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getCalendar = function (userName_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([userName_1], args_1, true), void 0, function (userName, year) {
                var query, variables, response, data, error_2;
                if (year === void 0) { year = 2024; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            query = "query ($userName: String!, $from: DateTime!, $to: DateTime!) {\n        user(login: $userName) {\n          contributionsCollection(from: $from, to: $to) {\n            contributionCalendar {\n            totalContributions\n              weeks {\n                contributionDays {\n                  count: contributionCount  # Renamed for clarity\n                  date\n                }\n              }\n            }\n          }\n        }\n      }";
                            variables = { userName: userName, from: "".concat(year, "-01-01T00:00:00Z"), to: "".concat(year, "-12-31T23:59:59Z") };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Axios_1.githubAPI.post("", { query: query, variables: variables })];
                        case 2:
                            response = _a.sent();
                            if (response.data.errors) {
                                console.error("GraphQL errors:", response.data.errors);
                                throw new Error(response.data.errors[0].message || "An unexpected error occurred");
                            }
                            data = response.data;
                            return [2 /*return*/, data];
                        case 3:
                            error_2 = _a.sent();
                            if (error_2 instanceof Error) {
                                throw new Error(error_2.message);
                            }
                            throw new Error("An unexpected error occurred");
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
    }
    return GitHubServices;
}());
exports.default = GitHubServices;
