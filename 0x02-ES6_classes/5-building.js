export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method that should be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error(`${this.constructor.name} must override evacuationWarningMessage`);
  }
}
