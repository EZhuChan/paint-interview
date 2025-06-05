export class DrawingTool {
  constructor(canvas) {
    this.canvas = canvas;
    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.setupTool();
  }

  setupTool() {
    this.canvas.setStrokeStyle("#000000");
    this.canvas.setLineWidth(2);
  }

  startDrawing(e) {
    this.isDrawing = true;
    const pos = this.canvas.getMousePos(e);
    this.lastX = pos.x;
    this.lastY = pos.y;

    this.canvas.beginPath();
    this.canvas.moveTo(this.lastX, this.lastY);
  }

  draw(e) {
    if (!this.isDrawing) return;

    const pos = this.canvas.getMousePos(e);

    this.canvas.lineTo(pos.x, pos.y);
    this.canvas.stroke();

    this.lastX = pos.x;
    this.lastY = pos.y;
  }

  stopDrawing() {
    this.isDrawing = false;
  }
}
