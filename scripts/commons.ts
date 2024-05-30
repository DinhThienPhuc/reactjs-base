import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";

interface IArgv {
  p?: string;
  packages?: string;
  a?: string;
  apps?: string;
}

interface IReturnTypeGetPnpmInfor {
  apps: string[];
  packages: string[];
  rest?: string;
}

/**
 * Define the function to ignore parts of a string
 */
export const ignoreParts = (input: string, pattern: RegExp): string => {
  return input.replace(pattern, "");
};

/**
 * Define the function to get pnpm information
 * @returns IReturnTypeGetPnpmInfor
 */
export const getPnpmInfor = (): IReturnTypeGetPnpmInfor => {
  const argv = yargs(hideBin(process.argv)).argv as IArgv;

  const [, , ...restArgv] = process.argv;
  const restArgvString = ignoreParts(
    restArgv.join(" "),
    /--apps=.+|--packages=.+|-a=.+|-p=.+/g,
  ).trim();

  const result: IReturnTypeGetPnpmInfor = {
    apps: [],
    packages: [],
  };

  if (argv.a && typeof argv.a === "string") {
    result.apps = argv.a.split(" ");
  } else if (argv.apps && typeof argv.apps === "string") {
    result.apps = argv.apps.split(" ");
  }

  if (argv.p && typeof argv.p === "string") {
    result.packages = argv.p.split(/\s|,/g).map((pkg) => {
      return pkg.includes(".") ? pkg : `${pkg}.main`;
    });
  } else if (argv.packages && typeof argv.packages === "string") {
    result.packages = argv.packages
      .split(/\s|,/g)
      .map((pkg) => (pkg.includes(".") ? pkg : `${pkg}.main`));
  }

  result.rest = restArgvString;

  return result;
};
