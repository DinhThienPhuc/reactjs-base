import { ExecSyncOptions, execSync } from "child_process";

import { getPnpmInfor } from "./commons";

/**
 * Define the function to run pnpm command
 */
const runPnpmCommand = () => {
  const pnpmInfor = getPnpmInfor();

  let command = "pnpm ";

  if (pnpmInfor.apps.length) {
    for (const app of pnpmInfor.apps) {
      command += `--filter ./apps/${app} `;
    }
  }

  if (pnpmInfor.packages.length) {
    for (const pkg of pnpmInfor.packages) {
      command += `--filter ./packages/${pkg} `;
    }
  }

  console.log("cpommand", pnpmInfor);

  const options: ExecSyncOptions = { stdio: "inherit" };

  // try {
  //   execSync(command, options);
  // } catch (error) {
  //   console.error(error);
  // }
};

/**
 * Execute the function
 */
runPnpmCommand();
