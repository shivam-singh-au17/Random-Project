const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const { DownloaderHelper } = require("node-downloader-helper");

const PORT = process.env.PORT || 3000;

var list = "";

var listFilePath = "public/uploads/" + Date.now() + "list.txt";
var outputFilePath = Date.now() + "output.mp4";

const app = express();

var dir = "public";
var subDirectory = "public/uploads";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  fs.mkdirSync(subDirectory);
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/mergeVideos", (req, res) => {
  const dataArr = req.body.paths;

  list = "";

  let myPromise = new Promise(function (myResolve, myReject) {
    for (let index = 0; index < dataArr.length; index++) {
      const file = dataArr[index];

      const dl = new DownloaderHelper(file, `${__dirname}/public/uploads/`, {
        fileName: `files-${Date.now()}.mp4`,
      });

      dl.on("end", () => myResolve());
      dl.on("error", () => myReject());

      dl.start().catch((err) => console.error(err));

      list += `file ${dl.__opts.fileName}`;
      list += "\n";
    }
  });

  var writeStream = fs.createWriteStream(listFilePath);

  writeStream.write(list);

  writeStream.end();

  myPromise.then(function () {
    exec(
      `ffmpeg -safe 0 -f concat -i ${listFilePath} -c copy ${outputFilePath}`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        } else {
          console.log("videos are successfully merged");

          res.download(outputFilePath, (err) => {
            if (err) throw err;

            const directory = "public/uploads";

            fs.readdir(directory, (err, files) => {
              if (err) throw err;

              for (const file of files) {
                fs.unlink(path.join(directory, file), (err) => {
                  if (err) throw err;
                });
              }
            });

            // fs.unlinkSync(outputFilePath);
          });
        }
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});
