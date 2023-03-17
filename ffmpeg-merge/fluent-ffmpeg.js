fluent - ffmpeg;

var fluent_ffmpeg = require("fluent-ffmpeg");

var mergedVideo = fluent_ffmpeg();

var videoNames = [
  `${__dirname}/public/uploads/video_03.mp4`,
  `${__dirname}/public/uploads/video_04.mp4`,
];

videoNames.forEach(function (videoName) {
  mergedVideo = mergedVideo.addInput(videoName);
});

mergedVideo
  .mergeToFile(`mergedVideo${Date.now()}.mp4`, "./tmp/")
  .on("error", function (err) {
    console.log("Error " + err.message);
  })
  .on("end", function () {
    console.log("Finished!");
  });