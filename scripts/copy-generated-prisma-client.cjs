const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.join(__dirname, "..");
const srcDir = path.join(repoRoot, "src", "generated", "prisma", "client");
const destDir = path.join(repoRoot, "dist", "generated", "prisma", "client");

if (!fs.existsSync(srcDir)) {
  console.warn(
    `[copy-generated-prisma-client] Skipping: missing ${srcDir}. Did you run prisma generate?`
  );
  process.exit(0);
}

fs.rmSync(destDir, { recursive: true, force: true });
fs.mkdirSync(path.dirname(destDir), { recursive: true });
fs.cpSync(srcDir, destDir, { recursive: true });
console.log(`[copy-generated-prisma-client] Copied ${srcDir} -> ${destDir}`);

