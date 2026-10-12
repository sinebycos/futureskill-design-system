// Post-build: ship fonts and logos as files, put the @font-face rules at the top of dist/styles.css,
// and write a tokens-only stylesheet (dist/tokens.css) for apps that do not use the React components.
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
mkdirSync(resolve(dist, 'logos'), { recursive: true });
cpSync(resolve(root, 'src/assets/logos'), resolve(dist, 'logos'), { recursive: true });
cpSync(resolve(root, 'src/fonts'), resolve(dist, 'fonts'), { recursive: true });
const fonts = readFileSync(resolve(root, 'src/styles/fonts.css'), 'utf8').replaceAll('../fonts/', './fonts/');
const styles = readFileSync(resolve(dist, 'styles.css'), 'utf8');
if (/url\(["']?data:font/.test(styles)) throw new Error('a font was inlined into styles.css');
writeFileSync(resolve(dist, 'styles.css'), fonts + '\n' + styles);
writeFileSync(resolve(dist, 'tokens.css'), fonts + '\n' + readFileSync(resolve(root, 'src/styles/tokens.css'), 'utf8'));
console.log('copied fonts and logos; wrote styles.css with @font-face and tokens.css');
