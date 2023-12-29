class Rectanlge {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this.height;
  }

  getArea() {
    return this._height * this._width;
  }
}

class Square extends Rectanlge {
  constructor(width, height) {
    super(width, height);
  }

  getPerimeter() {
    return 4 * this.width;
  }
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
