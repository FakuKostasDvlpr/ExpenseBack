"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveWithFS = exports.getWithFS = void 0;
const fs_1 = __importDefault(require("fs"));
const getWithFS = (file) => {
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(`./${file}.json`, "utf8", (err, content) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(content));
        });
    });
};
exports.getWithFS = getWithFS;
const saveWithFS = (file, content) => {
    return new Promise((resolve, reject) => {
        fs_1.default.writeFile(`./${file}.json`, JSON.stringify(content), (err) => {
            if (err) {
                reject(err);
            }
            resolve(console.log("Successfully loaded"));
        });
    });
};
exports.saveWithFS = saveWithFS;
