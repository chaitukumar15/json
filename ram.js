const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const JSON_FILE_PATH = path.join(__dirname, 'index.json');

const server = http.createServer((req, res) => {
    // Set the response header to indicate that the content type is JSON
    res.setHeader('Content-Type', 'application/json');

    // Read the JSON file
    fs.readFile("index.json", 'utf8', (err, data) => {
        if (err) {
            // If there's an error reading the file, send a 500 Internal Server Error response
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Internal Server Error', details: err.message }));
            return;
        }

        // Send the JSON data as the response
        res.statusCode = 200;
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});