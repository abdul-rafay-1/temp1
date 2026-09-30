
app.post('/convert', (req, res) => {
  const filename = req.body.filename;

  if (!filename.endsWith('.mp4')) {
    return res.status(400).send('Invalid filename');
  }

  if (!/^[a-zA-Z0-9_-]+\.mp4$/.test(filename)) {
  return res.status(400).send('Invalid filename');
  }
  const inputPath = path.join(__dirname, 'uploads', filename);
  execFile('ffmpeg', ['-i', inputPath, 'output.mp4'], (err, stdout) => {
    if (err) return res.status(500).send('Conversion failed');
    res.send('Converted');
  });
});

const express = require("express");
const mysql = require("mysql2");

const app = express();
const conn = mysql.createConnection({});

app.get("/user", (req, res) => {
    const sql =
        "SELECT * FROM users WHERE id = '" +
        req.query.id +
        "'";

    conn.query(sql, (err, rows) => {
        res.json(rows);
    });
});


const express = require("express");
const axios = require("axios");

const app = express();

app.get("/fetch", async (req, res) => {
    const result = await axios.get(req.query.url);
    res.send(result.data);
});

const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/ping", (req, res) => {
    exec(
        "ping " + req.query.host,
        (err, stdout) => {
            res.send(stdout);
        }
    );
});
