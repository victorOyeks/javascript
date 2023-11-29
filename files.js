const fs = require("fs");

// // reading files. This is asyncronous, i.e it doesnt stop other code lines from executing
// fs.readFile("./docs/blog.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// writing files
// fs.writeFile("./docs/blog1.txt", "Hello World", () => {
//   console.log("File was written");
// });

// directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder was created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Folder deleted");
//   });
// }

// deleting files

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
