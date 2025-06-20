export class Canvas {
  /**
   * @param {string} canvasId
   */
  constructor(canvasId) {
    /** @type {HTMLCanvasElement} */
    this.element = document.getElementById(canvasId);
    /** @type {CanvasRenderingContext2D} */
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
