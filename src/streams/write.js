import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { finished } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, './files/fileToWrite.txt');

const write = async () => {
	const fileStream = createWriteStream(filePath);

	process.stdin.pipe(fileStream);

	await finished(fileStream);

	console.log('\nFile was written successfully.');
};

await write();
