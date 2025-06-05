export class Canvas {
  constructor(canvasId) {
    this.element = document.getElementById(canvasId);
    this.ctx = this.element.getContext("2d");
  }

  getMousePos(e) {
    const rect = this.element.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }
}
