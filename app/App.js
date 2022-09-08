import { BudgetsController } from "./Controllers/BudgetsController.js";


class App {
  budgetsController = new BudgetsController()
}

window["app"] = new App();
