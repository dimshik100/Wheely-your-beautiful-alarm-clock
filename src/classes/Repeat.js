export class Repeat {
  constructor(data) {
    if (Array.isArray(data)) {
      this.days = data;
    } else {
      // TODO: Improve this state. Check if the accepted data is instance of Date and it's actually valid
      this.date = data;
    }
  }
}
