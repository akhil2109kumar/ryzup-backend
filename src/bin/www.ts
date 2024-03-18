import app from "../app";
import http from "http";
import { APP_CONFIG } from "../config/app-config";

// Get port from environment and store in Express.
const port = APP_CONFIG.PORT || "8000";
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

server.listen(port, () => console.log('info', `server is running at ${APP_CONFIG.PORT || 3000}`));
