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

  canvasElement.addEventListener("mouseup", (e) => {
    const currentTool = toolManager.getCurrentTool();
    currentTool.stopDrawing(e);
  });

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
    console.log("Mouse up", isMouseDown);
  });

  // canvasElement.addEventListener("mouseout", () => {
  //   isMouseDown = false;
  // });

  canvasElement.addEventListener("mouseleave", (e) => {
    const currentTool = toolManager.getCurrentTool();
    currentTool.stopDrawing(e);
  });

  canvasElement.addEventListener("mouseenter", (e) => {
    const currentTool = toolManager.getCurrentTool();
    if (isMouseDown) {
      currentTool.startDrawing(e);
    }
  });
}
