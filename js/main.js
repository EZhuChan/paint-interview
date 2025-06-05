import { Canvas } from "./Canvas.js";
import { ToolManager } from "./ToolManager.js";

class App {
  constructor() {
    this.canvas = new Canvas("canvas");
    this.toolManager = new ToolManager(this.canvas);
    this.setupEventListeners();
  }

  setupEventListeners() {
    const canvas = this.canvas.element;

    canvas.addEventListener("mousedown", (e) => {
      const currentTool = this.toolManager.getCurrentTool();
      if (currentTool) {
        currentTool.startDrawing(e);
      }
    });

    canvas.addEventListener("mousemove", (e) => {
      const currentTool = this.toolManager.getCurrentTool();
      if (currentTool) {
        currentTool.draw(e);
      }
    });

    canvas.addEventListener("mouseup", () => {
      const currentTool = this.toolManager.getCurrentTool();
      if (currentTool) {
        currentTool.stopDrawing();
      }
    });

    canvas.addEventListener("mouseout", () => {
      const currentTool = this.toolManager.getCurrentTool();
      if (currentTool) {
        currentTool.stopDrawing();
      }
    });
  }
}

new App();
