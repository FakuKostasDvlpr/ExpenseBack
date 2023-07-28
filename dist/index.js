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
const inquirer_1 = __importDefault(require("inquirer"));
const listOptions_1 = require("./helpers/listOptions");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let run = true;
    while (run) {
        const action = yield inquirer_1.default.prompt([
            {
                //[Tipo, name, message] & (lista, input, number)
                type: "list",
                name: "itemSelected",
                message: "Select",
                choices: [
                    {
                        value: 1,
                        name: "Create expense"
                    },
                    {
                        value: 2,
                        name: "Show all expenses"
                    },
                    {
                        value: 3,
                        name: "Clear All Expenses"
                    },
                    {
                        value: 100,
                        name: "Exit"
                    }
                ]
            }
        ]);
        switch (action.itemSelected) {
            case 1:
                yield (0, listOptions_1.createNewExpense)();
                break;
            case 2:
                yield (0, listOptions_1.showAllExpense)();
                break;
            case 3:
                yield (0, listOptions_1.deleteAllExpense)();
                break;
            case 100:
                run = false;
                break;
        }
    }
});
main();
