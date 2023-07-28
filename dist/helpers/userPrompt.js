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
exports.newCostPrompt = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const newCostPrompt = () => __awaiter(void 0, void 0, void 0, function* () {
    const expenseCategoryResponse = yield inquirer_1.default.prompt([
        {
            type: "list",
            name: "Category",
            message: "Select an ACTION",
            choices: [
                {
                    name: "Comida",
                    value: "Food",
                },
                {
                    name: "Ropa",
                    value: "Ropa",
                },
                {
                    name: "Nafta",
                    value: "Nafta",
                },
                {
                    name: "Ahorros+",
                    value: "Ahorros+",
                },
            ],
        },
    ]);
    let expenseTypeResponse;
    if (expenseCategoryResponse.Category === "Food") {
        expenseTypeResponse = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "Type",
                message: "Select the type of food:",
                choices: [
                    {
                        name: "Desayuno",
                        value: "Desayuno",
                    },
                    {
                        name: "Almuerzo",
                        value: "Almuerzo",
                    },
                    {
                        name: "Cena",
                        value: "Cena",
                    },
                    {
                        name: "Snacks",
                        value: "Snacks",
                    },
                ],
            },
        ]);
    }
    if (expenseCategoryResponse.Category === "Ropa") {
        expenseTypeResponse = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "Type",
                message: "Select the type of food:",
                choices: [
                    {
                        name: "Remera",
                        value: "Remera",
                    },
                    {
                        name: "Campera",
                        value: "Campera",
                    },
                    {
                        name: "Buzo",
                        value: "Buzo",
                    },
                    {
                        name: "Jean",
                        value: "Jean",
                    },
                ],
            },
        ]);
    }
    if (expenseCategoryResponse.Category === "Nafta") {
        expenseTypeResponse = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "Type",
                message: "Select the type of food:",
                choices: [
                    {
                        name: "Axion",
                        value: "Axion",
                    },
                    {
                        name: "YPF",
                        value: "YPF",
                    },
                ],
            },
        ]);
    }
    const totalResponse = yield inquirer_1.default.prompt([
        {
            type: "input",
            name: "Total",
            message: "Total: $",
            validate: (input) => {
                return !input.trim() ? "Please enter the total amount." : true;
            },
        },
    ]);
    const newExpense = {
        Description: expenseCategoryResponse.Category,
        Type: (expenseTypeResponse === null || expenseTypeResponse === void 0 ? void 0 : expenseTypeResponse.Type) || "",
        Total: totalResponse.Total,
    };
    return newExpense;
});
exports.newCostPrompt = newCostPrompt;
