import { DrawingTool } from "./DrawingTool.js";
import { EraserTool } from "./EraserTool.js";

export class ToolManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.currentTool = null;
    this.toolbarElement = null;

    this.tools = [
      {
        name: "Draw",
        icon: "✏️",
        instance: new DrawingTool(this.canvas),
      },
      {
        name: "Eraser",
        icon: "🧹",
        instance: new EraserTool(this.canvas),
      },
    ];

    this.createToolbar();
    this.setActiveTool("Draw");
  }

  createToolbar() {
    this.toolbarElement = document.querySelector(".toolbar");
    const toolsContainer = document.querySelector(".tools-container");

    for (const tool of this.tools) {
      const toolButton = this.createToolButton(tool);
      toolsContainer.appendChild(toolButton);
    }
  }

  createToolButton(tool) {
    const button = document.createElement("button");
    button.className = "tool-button";
    button.dataset.tool = tool.name;

    const icon = document.createElement("span");
    icon.className = "tool-icon";
    icon.textContent = tool.icon;

    const name = document.createElement("span");
    name.className = "tool-name";
    name.textContent = tool.name;

    button.appendChild(icon);
    button.appendChild(name);

    button.addEventListener("click", () => this.setActiveTool(tool.name));

    return button;
  }

  setActiveTool(toolName) {
    const tool = this.tools.find((t) => t.name === toolName);

    this.toolbarElement.querySelectorAll(".tool-button").forEach((btn) => {
      btn.classList.remove("active");
    });

    const activeButton = this.toolbarElement.querySelector(
      `[data-tool="${toolName}"]`
    );
    if (activeButton) {
      activeButton.classList.add("active");
    }

    this.currentTool = tool.instance;
  }

  getCurrentTool() {
    return this.currentTool;
  }
}
