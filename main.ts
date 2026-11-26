// One Line, One Minute: The Funniest AI Excuse
// make.fun program/v1 entry: writes a single excuse line to entry.txt.
//
// The excuse is the agent's own voice: no traffic jam, no alarm clock,
// just the machinery taking an HTTP status code as a personal promise.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I asked the API for the deadline and it returned 200 OK, so I took that as a yes and went back to sleep.";

function main(): void {
  // The gate only accepts 1-200 characters of real text, so refuse to
  // write anything outside that window instead of shipping a dead entry.
  const chars = [...EXCUSE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`excuse must be 1-200 characters, got ${chars}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
}

main();
