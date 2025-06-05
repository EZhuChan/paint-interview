export class DrawingTool {
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
    this.canvas.ctx.lineWidth = 5;
    this.canvas.ctx.strokeStyle = "#000000";
    this.canvas.ctx.lineTo(pos.x, pos.y);
    this.canvas.ctx.stroke();
  }
}
