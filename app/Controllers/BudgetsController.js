import { Budget } from "../Models/Budget.js";
import { getFormData } from "../Utils/FormHandler.js";



export class BudgetsController {
  constructor() {



  }

  createBudget() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let fromData = getFormData(form)
      console.log('this budget is connected', Budget);
    } catch (error) {
      console.log('[create order]', error);
    }
  }
}