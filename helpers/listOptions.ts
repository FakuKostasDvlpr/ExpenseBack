import { getWithFS, saveWithFS} from "../helpers/fsMethods"
import inquirer from "inquirer";
import { newCostPrompt } from "./userPrompt";
import { IExpense } from "../interfaces/interfaces";

//mostrar todos los gastos

export const showAllExpense = async () =>{
    const currentExpense = await getWithFS("users")
    console.log(currentExpense);
}

//crear nuevo gasto

export const createNewExpense = async () =>{
    const currentExpense = await getWithFS("users")

    const newCurrentData = await newCostPrompt();

    currentExpense.push(newCurrentData);

    await saveWithFS("users", currentExpense)
}

export const deleteAllExpense = async () => {
    const currentExpenses = await getWithFS("users");
    if (currentExpenses.length < 3) {
       console.log("El minimo para limpiar la lista son 3 usuarios");
      return;
    }
  
    const { confirmation } = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirmation",
        message: "Are you sure you want to delete all expenses? This action is irreversible!",
        default: false,
      },
    ]);
  
    if (confirmation) {
      await saveWithFS("users", [] as IExpense[]);
      console.log("All expenses have been deleted.");
    } else {
      console.log("Deletion canceled.");
    }
  };