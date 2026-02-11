import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = resolve(process.cwd(), 'dist');
const targets = ['llms.txt', 'llms-small.txt', 'llms-full.txt'];

function stripTags(input = '') {
  return input.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function homepageSection() {
  const indexPath = resolve(distDir, 'index.html');
  if (!existsSync(indexPath)) return '';

  const html = readFileSync(indexPath, 'utf8');
  const h1 = stripTags((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || 'Home');
  const meta = stripTags((html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i) || [])[1] || '');

  let section = `# ${h1}\n\n`;
  if (meta) section += `> ${meta}\n\n`;
  section += '---\n\n';
  return section;
}

for (const name of targets) {
  const file = resolve(distDir, name);
  if (!existsSync(file)) continue;

  const before = readFileSync(file, 'utf8');
  let after = before
    .replace(/^<SYSTEM>[\s\S]*?<\/SYSTEM>\s*/m, '')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd() + '\n';

  if ((name === 'llms-small.txt' || name === 'llms-full.txt') && !/^#\s+Roland Kákonyi\b/m.test(after)) {
    const home = homepageSection();
    if (home) after = home + after;
  }

  if (after !== before) {
    writeFileSync(file, after, 'utf8');
    console.log(`Sanitized ${name}`);
  }
}
