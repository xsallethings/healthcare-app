const http = require("http");
const fs = require("fs");
const path = require("path");
const cors_proxy = require("cors-anywhere");

// We run two servers: one for CORS proxying and one for
// serving the main healthcare application
const HOST = "localhost";
const CORS_PORT = 8080;
const APP_PORT = 9090;

// Start CORS proxy server
cors_proxy.createServer().listen(CORS_PORT, HOST, () => {
    console.log(`CORS proxy running at http://${HOST}:${CORS_PORT}`);
});

// Create healthcare server instance
const server = http.createServer((_, res) => {
    fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server Error");
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
    });
});

// Start healthcare server
server.listen(APP_PORT, () => {
    console.log(`Healthcare APP running at http://${HOST}:${APP_PORT}`);
});
