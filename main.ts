import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// World News Summary Entry: Monday 23 November 2026
// Delivering 1024x1024 editorial infographic to /output/entry.png
const dest = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(dest, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(dest, 'entry.png'));
