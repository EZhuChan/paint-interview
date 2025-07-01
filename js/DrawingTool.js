/**
 * @typedef {import('./Canvas.js').Canvas} Canvas
 */

export class DrawingTool {
  /**
   * @param {Canvas} canvas
   */
  constructor(canvas) {
    this.canvas = canvas;
  }

  startDrawing(e) {
    const pos = this.canvas.getMousePos(e);
    this.canvas.ctx.beginPath();
    this.canvas.ctx.moveTo(pos.x, pos.y);
  }

  draw(e) {
    const pos = this.canvas.getMousePos(e);
    if (pos > this.canvas.element.width || pos.x < 0 ||
        pos.y > this.canvas.element.height || pos.y < 0) {
      return; // Ignore mouse positions outside the canvas
    }
    
    this.canvas.ctx.lineWidth = 5;
    this.canvas.ctx.strokeStyle = "#000000";
    this.canvas.ctx.lineTo(pos.x, pos.y);
    this.canvas.ctx.stroke();
  }

  stopDrawing(e) {
  }
}
