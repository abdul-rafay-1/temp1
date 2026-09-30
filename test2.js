
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

const fs = require("fs");

function readFile(filename) {
    return fs.readFileSync("/app/data/" + filename, "utf8");
}

console.log(readFile(process.argv[2]));


function execute(code) {
    return eval(code);
}

execute(process.argv[2]);


function displayComment(comment) {
    document.getElementById("output").innerHTML = comment;
}

displayComment(location.hash.substring(1));

const { exec } = require("child_process");

function runCommand(userInput) {
    exec("ls " + userInput, (err, stdout, stderr) => {
        console.log(stdout);
    });
}

runCommand(process.argv[2]);
