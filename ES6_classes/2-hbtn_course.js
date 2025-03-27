export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
        throw new TypeError("Name must be a string");
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
        throw new TypeError("Length must be a number");
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students)) {
      let isString = 0;
      for (const element of students) {
        if (typeof element === 'string') {
          isString += 1;
        }
      }
      if (isString === students.length) {
        this._students = students;
      } else {
        throw new TypeError("students must be an array of strings");
      }
    } else {
        throw new TypeError("students must be an array of strings");
    }
  }
}
