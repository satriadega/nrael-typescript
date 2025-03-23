const { exec } = require("child_process");
const util = require("util");
const fs = require("fs").promises;
const execPromise = util.promisify(exec);

async function runCommand(command, successMessage) {
  try {
    const { stdout, stderr } = await execPromise(command);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    console.log(successMessage);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

async function main() {
  await runCommand("rm -f ./dist/*", "Deleted all files in dist");

  const folderName = process.argv[2] || "dist";

  console.log("Compiling TypeScript...");
  await runCommand(
    `tsc --outDir dist ./src/${folderName}/*.ts`,
    "Compilation complete."
  );

  try {
    const files = await fs.readdir(`./dist`);
    const jsFiles = files.filter((file) => file.endsWith(".js"));

    for (const file of jsFiles) {
      console.log(`Executing ${file}...\n`);
      await runCommand(`node ./dist/${file}`, `${file} executed successfully.`);
    }
  } catch (error) {
    console.error(
      `Error reading or executing files in ${folderName}: ${error.message}`
    );
    process.exit(1);
  }
}

main();
