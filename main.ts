import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Six Words, One Story — the turn lands in the last three words:
// "stopped" does double duty, the watch and the man both stop.
// The grader cwd is read-only, so nothing is ever written relative to it.
const STORY =
  "Grandfather's watch stopped. So did he.";

// The gate requires exactly six words and 1-60 characters.
const words = STORY.split(/\s+/).filter(Boolean);
if (words.length !== 6) throw new Error(`story must be exactly six words, got ${words.length}`);
if (STORY.length < 1 || STORY.length > 60) throw new Error("story outside 1-60 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");

// Verify the written file round-trips byte-identical to the chosen story.
if (readFileSync("/output/entry.txt", "utf8") !== STORY) {
  throw new Error("entry.txt does not match the chosen story");
}
