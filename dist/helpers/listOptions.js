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
exports.deleteAllExpense = exports.createNewExpense = exports.showAllExpense = void 0;
const fsMethods_1 = require("../helpers/fsMethods");
const inquirer_1 = __importDefault(require("inquirer"));
const userPrompt_1 = require("./userPrompt");
//mostrar todos los gastos
const showAllExpense = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentExpense = yield (0, fsMethods_1.getWithFS)("users");
    console.log(currentExpense);
});
exports.showAllExpense = showAllExpense;
//crear nuevo gasto
const createNewExpense = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentExpense = yield (0, fsMethods_1.getWithFS)("users");
    const newCurrentData = yield (0, userPrompt_1.newCostPrompt)();
    currentExpense.push(newCurrentData);
    yield (0, fsMethods_1.saveWithFS)("users", currentExpense);
});
exports.createNewExpense = createNewExpense;
const deleteAllExpense = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentExpenses = yield (0, fsMethods_1.getWithFS)("users");
    if (currentExpenses.length < 3) {
        console.log("El minimo para limpiar la lista son 3 usuarios");
        return;
    }
    const { confirmation } = yield inquirer_1.default.prompt([
        {
            type: "confirm",
            name: "confirmation",
            message: "Are you sure you want to delete all expenses? This action is irreversible!",
            default: false,
        },
    ]);
    if (confirmation) {
        yield (0, fsMethods_1.saveWithFS)("users", []);
        console.log("All expenses have been deleted.");
    }
    else {
        console.log("Deletion canceled.");
    }
});
exports.deleteAllExpense = deleteAllExpense;
