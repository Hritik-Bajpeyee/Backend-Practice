// You Have to Write a Node.js program to clear clutter inside og=f a directory and organioze the contents of that directory into different folders
import { readdir, access, mkdir, rename } from "fs/promises";
import { constants } from "fs";
import path from "path";

const basepath = "C:/Users/HP/Desktop/Backend/Question";

for (const item of await readdir(basepath)) {
  const ext = path.extname(item).slice(1) || "unknown";
  if (!["js","json"].includes(ext)) {
    const folder = path.join(basepath, ext);
    // 1) Check if the folder exists
    try {
      await access(folder, constants.F_OK);
    } catch {
      // 2) Create it if missing (and any parents)
      await mkdir(folder, { recursive: true });
    }
    // 3) Now safely move the file
    await rename(
      path.join(basepath, item),
      path.join(folder, item)
    );
    console.log(`Moved ${item} → ${ext}/`);
  }
}
