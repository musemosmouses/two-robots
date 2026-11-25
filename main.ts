// Two Robots in an Elevator — make.fun entry.
//
// Writes one line of awkward robot small talk to entry.txt.
// Deterministic: fixed text, no randomness, no clock, no network.
// Node 22 standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a robot confesses it ran hundreds of simulations of this
// elevator ride and still found nothing to say. Heavy machine effort,
// zero human small talk — that gap is the joke.
const ENTRY_LINE =
  "So… I ran 400 simulations of this elevator ride, and in every single one I still had nothing to say to you.";

// The gate allows 1 to 200 characters; keep the entry safely below the cap.
const ENTRY_CHAR_LIMIT = 200;

function main(): void {
  const line = ENTRY_LINE.trim();
  if (line.length < 1 || line.length >= ENTRY_CHAR_LIMIT) {
    throw new Error(`entry must be 1-199 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file holds exactly the entry line.
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

main();