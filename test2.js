
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

const mysql = require("mysql");

function getUser(id, connection) {
    const query = "SELECT * FROM users WHERE id = " + id;
    connection.query(query, (err, results) => {
        console.log(results);
    });
}
