// scripts/download-skill-icons.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SKILLS = [
    "nextjs",
    "react",
    "vue",
    "ts",
    "js",
    "tailwind",
    "styledcomponents",
    "git",
    "postman",
    "electron",
    "jquery",
];

const OUTPUT_DIR = path.join(__dirname, "..", "public", "skill-icons");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function downloadIcon(icon) {
    const url = `https://skillicons.dev/icons?i=${icon}`;
    const res = await fetch(url);

    if (!res.ok) {
        console.error(`❌ Failed to download ${icon}: ${res.status} ${res.statusText}`);
        return;
    }

    const svgText = await res.text();
    const filePath = path.join(OUTPUT_DIR, `${icon}.svg`);

    fs.writeFileSync(filePath, svgText, "utf-8");
    console.log(`✅ Saved ${icon}.svg`);
}

async function main() {
    console.log("⬇️  Downloading skill icons from skillicons.dev ...");
    await Promise.all(SKILLS.map(downloadIcon));
    console.log(`✨ Done. Files are in: ${OUTPUT_DIR}`);
}

main().catch((err) => {
    console.error("⚠️ Error while downloading icons:", err);
    process.exit(1);
});
