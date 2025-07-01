/**
 * @typedef {import('./Canvas.js').Canvas} Canvas
 */

export class SquareTool {
  /**
   * @param {Canvas} canvas
   */
  constructor(canvas) {
    this.canvas = canvas;
    this.pos = null; // Store the starting position of the square
  }

  startDrawing(e) {
    const pos = this.canvas.getMousePos(e);
    this.pos = pos; // Store the starting position of the square
    this.canvas.ctx.beginPath();
    this.canvas.ctx.moveTo(pos.x, pos.y);
  }

  draw(e) {

  }

  stopDrawing(e) {
    // No specific action needed for stopping the square drawing
    // The square is drawn in the draw method
    const endPos = this.canvas.getMousePos(e);
    this.canvas.ctx.lineWidth = 5;
    this.canvas.ctx.strokeStyle = "#000000";

    console.log(this.pos);
    // this,canvas.ctx.fillStyle = "red"; // Fill color for the square
    this.canvas.ctx.fillRect(this.pos.x, this.pos.y, endPos.x - this.pos.x, endPos.y - this.pos.y); // Draw a square of size 50x50
    this.canvas.ctx.stroke();
  }
}
