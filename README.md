# MS Paint Clone - Interview Question

A simple MS Paint clone built with vanilla JavaScript and HTML for interview purposes.

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm run dev
   ```

3. Open your browser to `http://localhost:5173`

## Architecture

The application is structured with the following files:

- `index.html` - Main HTML structure and canvas element
- `styles.css` - All CSS styles for the application
- `js/main.js` - Main application entry point and event handling
- `js/Canvas.js` - Canvas wrapper class with utilities
- `js/DrawingTool.js` - Black marker tool
- `js/EraserTool.js` - White eraser tool
- `js/ToolManager.js` - Extensible tool management system

## Interview Task

This is the starting point for your interview. The application currently supports basic drawing and erasing. Your task is to extend this application with additional features.

### Possible Extensions

Some ideas for extending the application (pick based on time and discussion):

1. **Color Selection**

   - Add a color palette
   - Allow users to select different colors

2. **Brush Sizes**

   - Add different brush/pen sizes
   - Size selector UI

3. **Additional Tools**

   - Different drawing tools (pencil, brush)
   - Shape tools (rectangle, circle, line)
   - Fill tool

4. **Canvas Management**
   - Clear canvas button
   - Undo/Redo functionality
   - Save/Load drawings

## Guidelines

- Use vanilla JavaScript and HTML only
- Focus on readable code, extendable
- You are allowed to use AI tools to help you
- Ask questions if anything is unclear

## Development

- **Hot Reload**: Vite automatically reloads when you make changes
- **Cache**: No cache issues during development
- **Error Handling**: Check the browser console for any errors

## Code Structure

The current code is designed to be easily extendable:

- **`main.js`** - Manages mouse state and coordinates drawing
- **`Canvas`** - Provides utilities and direct access to canvas context
- **`ToolManager`** - Manages tool selection and UI
- **Tool classes** - Focus purely on drawing mechanics (no state management)
- All tools work with the canvas context directly for maximum flexibility
