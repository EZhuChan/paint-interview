import { DrawingTool } from "./DrawingTool.js";
import { EraserTool } from "./EraserTool.js";

export class ToolManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.currentTool = null;
    this.tools = new Map();
    this.toolbarElement = null;

    this.initializeTools();
    this.createToolbar();
    this.setActiveTool("draw");
  }

  initializeTools() {
    this.tools.set("draw", {
      name: "Draw",
      icon: "✏️",
      class: DrawingTool,
      description: "Draw with a black marker",
    });

    this.tools.set("erase", {
      name: "Eraser",
      icon: "🧹",
      class: EraserTool,
      description: "Erase parts of the drawing",
    });
  }

  createToolbar() {
    const container = document.querySelector(".container");
    const canvasContainer = document.querySelector(".canvas-container");

    this.toolbarElement = document.createElement("div");
    this.toolbarElement.className = "toolbar";

    const toolbarTitle = document.createElement("h3");
    toolbarTitle.textContent = "Tools";
    toolbarTitle.className = "toolbar-title";
    this.toolbarElement.appendChild(toolbarTitle);

    const toolsContainer = document.createElement("div");
    toolsContainer.className = "tools-container";

    for (const [key, tool] of this.tools) {
      const toolButton = this.createToolButton(key, tool);
      toolsContainer.appendChild(toolButton);
    }

    this.toolbarElement.appendChild(toolsContainer);
    container.insertBefore(this.toolbarElement, canvasContainer);
  }

  createToolButton(key, tool) {
    const button = document.createElement("button");
    button.className = "tool-button";
    button.dataset.tool = key;

    const icon = document.createElement("span");
    icon.className = "tool-icon";
    icon.textContent = tool.icon;

    const name = document.createElement("span");
    name.className = "tool-name";
    name.textContent = tool.name;

    button.appendChild(icon);
    button.appendChild(name);

    button.addEventListener("click", () => this.setActiveTool(key));

    return button;
  }

  setActiveTool(toolKey) {
    if (!this.tools.has(toolKey)) {
      console.warn(`Tool "${toolKey}" not found`);
      return;
    }

    this.toolbarElement.querySelectorAll(".tool-button").forEach((btn) => {
      btn.classList.remove("active");
    });

    const activeButton = this.toolbarElement.querySelector(
      `[data-tool="${toolKey}"]`
    );
    if (activeButton) {
      activeButton.classList.add("active");
    }

    const ToolClass = this.tools.get(toolKey).class;
    this.currentTool = new ToolClass(this.canvas);
  }

  getCurrentTool() {
    return this.currentTool;
  }
}
