export class Repeat {
  constructor(data) {
    if (Array.isArray(data)) {
      this.days = data;
    } else if (data instanceof Date) {
      // this is not checking if the date is valid. invalid dates will pass "new Date('random_string')"
      this.date = data;
    } else {
      throw new Error('Incorrect Repeat initial data');
    }
  }
}
