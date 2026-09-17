"use strict";

/**
 * Phusion Passenger (cPanel Application Manager) looks for app.js by default.
 * Do not rename this file unless you also set PassengerStartupFile.
 */
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOST || "127.0.0.1";
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });

    // Passenger intercepts listen() with reverse port binding.
    server.listen(port, () => {
      console.log(`cPanel Next.js demo ready on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start Next.js:", error);
    process.exit(1);
  });
