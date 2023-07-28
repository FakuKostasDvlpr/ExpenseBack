import inquirer from "inquirer"
import { IExpense } from "../interfaces/interfaces"

export const newCostPrompt = async (): Promise<IExpense> => {

    const expenseCategoryResponse = await inquirer.prompt([
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
  
    if(expenseCategoryResponse.Category === "Food") {
      expenseTypeResponse = await inquirer.prompt([
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

    if(expenseCategoryResponse.Category === "Ropa") {
      expenseTypeResponse = await inquirer.prompt([
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

    if(expenseCategoryResponse.Category === "Nafta") {
      expenseTypeResponse = await inquirer.prompt([
        {
          type: "list",
          name: "Type",
          message: "Select the type of food:",
          choices: 
          [
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
    
    const totalResponse = await inquirer.prompt([
        {
          type: "input",
          name: "Total",
          message: "Total: $",
          validate: (input) => {
            return !input.trim() ? "Please enter the total amount." : true;
          },
        },
    ]);
  
    const newExpense: IExpense = {
      Description: expenseCategoryResponse.Category,
      Type: expenseTypeResponse?.Type || "", 
      Total: totalResponse.Total,
    };
  
    return newExpense;
  };


