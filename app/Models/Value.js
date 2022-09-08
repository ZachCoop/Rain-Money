import { generateId } from "../Utils/generateId.js"


export class Budget {
  /**
   * The data needed to make a budget
   * @param {{name: string, price: number, purchased: boolean, id?:string}} data
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.price = data.price
    this.purchased = data.purchased
  }

  get BudgetCardTemplate() {
    return /*html*/`
    <div class="bg-white elevation-1 m-lg-3 p-4 my-2">
            <div class="my-2 gap-6 d-flex justify-content-between">
              <div class="d-flex gap-3">
                <input type="checkbox">
                <h6>${this.name}</h6>
              </div>
              <div class="d-flex gap-3">
                <h6>$200</h6>
                <h6>Of</h6>
                <h6 class="color-info">$${this.price}</h6>
              </div>
            </div>
            <div class="d-flex">
              <div class="col-md-11 d-flex justify-content-between">
                <p>Sell Old Tv</p>
                <p>$120</p>
              </div>
              <div class="col-md-1 ps-3">
                <div class="mdi mdi-delete"></div>
              </div>
            </div>
            <div class="d-flex">
              <div class="col-md-11 d-flex justify-content-between">
                <p>Birthday Money</p>
                <p>$60</p>
              </div>
              <div class="col-md-1 ps-3">
                <div class="mdi mdi-delete"></div>
              </div>
            </div>
            <div class="d-flex">
              <div class="col-md-11 d-flex justify-content-between">
                <p>60 from next 3 paychecks</p>
                <p>$180</p>
              </div>
              <div class="col-md-1 ps-3">
                <div class="mdi mdi-delete"></div>
              </div>
            </div>
            <div class="input-group">
              <input type="text" aria-label="First name" class="form-control" name="body">
              <input type="text" aria-label="Last name" class="form-control" name="price">
              <span class="input-group-text">Add</span>
            </div>
          </div>
    `
  }





}
