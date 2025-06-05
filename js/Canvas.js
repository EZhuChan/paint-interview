export class Canvas {
  constructor(canvasId) {
    this.element = document.getElementById(canvasId);
    this.ctx = this.element.getContext("2d");
    this.setupCanvas();
  }

  setupCanvas() {
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
  }

  getMousePos(e) {
    const rect = this.element.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  clear() {
    this.ctx.clearRect(0, 0, this.element.width, this.element.height);
  }

  setStrokeStyle(color) {
    this.ctx.strokeStyle = color;
  }

  setLineWidth(width) {
    this.ctx.lineWidth = width;
  }

  beginPath() {
    this.ctx.beginPath();
  }

  moveTo(x, y) {
    this.ctx.moveTo(x, y);
  }

  lineTo(x, y) {
    this.ctx.lineTo(x, y);
  }

  stroke() {
    this.ctx.stroke();
  }
}
