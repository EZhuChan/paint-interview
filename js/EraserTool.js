export class EraserTool {
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
    this.canvas.ctx.lineWidth = 30;
    this.canvas.ctx.strokeStyle = "#ffffff";
    this.canvas.ctx.lineTo(pos.x, pos.y);
    this.canvas.ctx.stroke();
  }
}
