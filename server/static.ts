import { type Express } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "dist", "public");

  app.get("*", (req, res, next) => {
    // Skip API routes
    if (req.path.startsWith("/api")) {
      return next();
    }
    
    // Check if file exists in public dir
    const filePath = path.join(distPath, req.path);
    res.sendFile(filePath, (err) => {
      if (err) {
        // Fallback to index.html for SPA routing
        res.sendFile(path.resolve(distPath, "index.html"));
      }
    });
  });
}
