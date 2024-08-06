import { glob } from "glob";
import { rimraf } from "rimraf";

// Pattern to match the files to delete
const pattern = "./{packages,apps}/**/statistics.html";

const removeStatisticFiles = async () => {
  try {
    const files = await glob(pattern);
    const rmPromises: Promise<boolean>[] = [];
    files.forEach((file) => rmPromises.push(rimraf(file)));
    await Promise.all(rmPromises);
  } catch (error) {
    console.error("Error removing statistics:", error);
    return;
  }
};

removeStatisticFiles();
