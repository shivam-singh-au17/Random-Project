let videoStitch = require("video-stitch");

let videoConcat = videoStitch.concat;


try {
  // merge
  videoConcat({
    silent: false,
  })
    .clips([
      {
        fileName: `${__dirname}/public/uploads/video_03.mp4`,
      },
      {
        fileName: `${__dirname}/public/uploads/video_04.mp4`,
      },
    ])
    .output(`output${Date.now()}.mp4`) //optional absolute file name for output file
    .concat()
    .then((outputFileName) => {
      console.log(`ouput: ${outputFileName}`);
    });
} catch (error) {
  console.log("error", error);
}