import { glob } from "glob";
import { rimraf } from "rimraf";

// Pattern to match the files to delete
const pattern = "./{packages,apps}/**/vite.config.ts.timestamp-*";

const removeTemporaryViteFiles = async () => {
  try {
    const files = await glob(pattern);
    const rmPromises: Promise<boolean>[] = [];
    files.forEach((file) => rmPromises.push(rimraf(file)));
    await Promise.all(rmPromises);
  } catch (error) {
    console.error("Error removing temporary vite files:", error);
    return;
  }
};

removeTemporaryViteFiles();
