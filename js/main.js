import { Canvas } from "./Canvas.js";
import { ToolManager } from "./ToolManager.js";

const canvas = new Canvas("canvas");
const toolManager = new ToolManager(canvas);
let isMouseDown = false;

setupEventListeners();

function setupEventListeners() {
  const canvasElement = canvas.element;

  canvasElement.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    const currentTool = toolManager.getCurrentTool();
    currentTool.startDrawing(e);
  });

  canvasElement.addEventListener("mousemove", (e) => {
    if (isMouseDown) {
      const currentTool = toolManager.getCurrentTool();
      currentTool.draw(e);
    }
  });

  canvasElement.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  // canvasElement.addEventListener("mouseout", () => {
  //   isMouseDown = false;
  // });
}
