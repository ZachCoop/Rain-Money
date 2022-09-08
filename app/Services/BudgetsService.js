import { appState } from "../AppState.js"
import { Budget } from "../Models/Budget.js"



class BudgetsService {
  createBudget(formData) {
    let budget = new Budget(formData)
    appState.budgets = [budget, ...appState.budgets]
    console.log(appState.budgets);
  }
}


