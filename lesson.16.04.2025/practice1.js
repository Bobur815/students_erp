import http from "http";
import fs from "fs";
import path from "path";

let PORT = process.env.PORT || 3638;

let server = http.createServer((req, res) => {
    let fileName = (req.url === "/") ? "/index" : req.url;
    let ext = path.extname(fileName);

    let contentTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png"
    };

    if (!ext) {
        fileName = "./frontend" + fileName + ".html";
        fs.readFile(fileName, (error, data) => {
            if (error) {
                res.writeHead(404);
                res.end("File not found");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        fileName = "./frontend" + fileName;
        let contentType = contentTypes[ext] || "application/octet-stream";

        fs.readFile(fileName, (error, data) => {
            if (error) {
                res.writeHead(404);
                res.end("File not found");
            } else {
                res.writeHead(200, { "Content-Type": contentType });
                res.end(data);
            }
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});