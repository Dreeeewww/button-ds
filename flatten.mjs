import { readFileSync, writeFileSync, mkdirSync } from 'fs';

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      !('$value' in source[key])
    ) {
      target[key] = deepMerge(target[key] ?? {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const raw = JSON.parse(readFileSync('tokens.json', 'utf8'));
const merged = {};
const sets = Object.keys(raw).filter((k) => !k.startsWith('$'));
for (const set of sets) {
  deepMerge(merged, raw[set]);
}
mkdirSync('build', { recursive: true });
writeFileSync('build/flat.json', JSON.stringify(merged, null, 2));
console.log('merged sets:', sets.join(', '));
