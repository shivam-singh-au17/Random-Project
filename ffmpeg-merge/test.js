var url = require("url");
var path = require("path");
var parsed = url.parse(
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
);
console.log(path.basename(parsed.pathname));




const dl = new DownloaderHelper(
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  `${__dirname}/public/uploads/`,
  {
    fileName: "mytest.mp4",
  }
);

dl.on("end", () => console.log("Download Completed"));
dl.on("error", (err) => console.log("Download Failed", err));
dl.start().catch((err) => console.error(err));










































const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
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

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const videoFilter = function (req, file, cb) {
  // Accept videos only

  if (!file.originalname.match(/.(mp4)$/)) {
    req.fileValidationError = "Only video files are allowed!";
    return cb(new Error("Only video files are allowed!"), false);
  }

  cb(null, true);
};

var upload = multer({ storage: storage, fileFilter: videoFilter });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/merge", upload.array("files", 10), (req, res) => {
  list = "";

  if (req.files) {
    req.files.forEach((file) => {
      list += `file ${file.filename}`;
      list += "\n";
    });

    var writeStream = fs.createWriteStream(listFilePath);

    writeStream.write(list);

    writeStream.end();

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

            req.files.forEach((file) => {
              fs.unlinkSync(file.path);
            });

            fs.unlinkSync(listFilePath);
            fs.unlinkSync(outputFilePath);
          });
        }
      }
    );
  }
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

      console.log("dl:", dl.__opts.fileName);

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

            // dataArr.forEach((file) => {
            //   fs.unlinkSync(file.path);
            // });

            // fs.unlinkSync(listFilePath);
            // fs.unlinkSync(outputFilePath);
          });
        }
      }
    );
  });

  // setTimeout(() => {
  //   exec(
  //     `ffmpeg -safe 0 -f concat -i ${listFilePath} -c copy ${outputFilePath}`,
  //     (error, stdout, stderr) => {
  //       if (error) {
  //         console.log(`error: ${error.message}`);
  //         return;
  //       } else {
  //         console.log("videos are successfully merged");

  //         res.download(outputFilePath, (err) => {
  //           if (err) throw err;

  //           // dataArr.forEach((file) => {
  //           //   fs.unlinkSync(file.path);
  //           // });

  //           // fs.unlinkSync(listFilePath);
  //           // fs.unlinkSync(outputFilePath);
  //         });
  //       }
  //     }
  //   );
  // }, 3000);

  // return res.json({ status: "true" });
});

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});
