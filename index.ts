import inquirer from "inquirer"
import { showAllExpense, createNewExpense, deleteAllExpense } from "./helpers/listOptions";


const main = async () =>{
    let run = true;
    while(run){
        const action = await inquirer.prompt([
            {
                //[Tipo, name, message] & (lista, input, number)
                type: "list",
                name: "itemSelected",  
                message: "Select",
                choices: 
                [
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
        ])

        switch(action.itemSelected){
            case 1:
                await createNewExpense();
            break;

            case 2:
               await showAllExpense();
            break;
            case 3:
               await deleteAllExpense();
            break;
            case 100:
                run = false;                 
            break;
        }
    }
}

main()