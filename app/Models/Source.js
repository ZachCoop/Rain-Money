import { generateId } from "../Utils/generateId.js"

export class Source {
  // The data needed to make a source
  //  @param { { body: string, price: number, budgetId : string, id ?: string } } data

  constructor(data) {
    this.id = data.id || generateId()
    this.budgetId = data.budgetId
    this.body = data.body
    this.price = parseInt(data.price)
  }
}