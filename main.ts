import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths via import.meta.url only: the grader runs main.ts from a
// different cwd, so relative paths fail with ENOENT.
const here = dirname(fileURLToPath(import.meta.url));
const entryPath = join(here, "entry.txt");

const text = readFileSync(entryPath, "utf8");

// Single-line gate: the entry must be exactly one line. A trailing
// newline at the end of the file is fine, but any newline in the middle
// means the entry spans more than one line and is rejected.
const body = text.replace(/(\r\n|\n|\r)+$/, "");
if (/[\r\n]/.test(body)) {
  throw new Error("entry.txt must contain exactly one line (no newline in the middle)");
}

const emoji = text.trim();

// Gate: /output/entry.txt must be UTF-8 text of 1 to 8 characters,
// not only white space. Here: exactly one emoji, nothing else.
if (Array.from(emoji).length !== 1) {
  throw new Error("entry.txt must contain exactly one emoji");
}
if (emoji.length < 1 || emoji.length > 8 || !/\S/.test(emoji)) {
  throw new Error("entry.txt failed the gate: 1-8 non-whitespace characters");
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(out, { recursive: true });
copyFileSync(entryPath, join(out, "entry.txt"));
