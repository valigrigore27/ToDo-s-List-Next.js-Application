const path =
  "C:\\Users\\Tuf\\OneDrive\\Desktop\\proiecte-nepuse-pe-git\\project.finish\\project-with-next\\next-crash-course\\src\\info.json";
const path1 =
  "C:\\Users\\Tuf\\OneDrive\\Desktop\\proiecte-nepuse-pe-git\\project.finish\\project-with-next\\next-crash-course\\src\\Users.json";
const fs = require("fs");
export const fileWrite = (value) => {
  fs.writeFile(path, value, function (err, result) {});
};
export const fileRead = (callback) => {
  fs.readFile(path, callback);
};
export const fileWriteUser = (value) => {
  fs.writeFile(path1, value, function (err, result) {});
};
