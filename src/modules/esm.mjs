import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.cjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

async function loadJSON(filePath) {
	const absolutePath = join(__dirname, filePath);
	const fileContent = await fs.readFile(absolutePath, 'utf-8');
	return JSON.parse(fileContent);
}

if (random > 0.5) {
	unknownObject = await loadJSON('./files/a.json');
} else {
	unknownObject = await loadJSON('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
	res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
	console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
