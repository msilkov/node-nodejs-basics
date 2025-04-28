import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { finished } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, './files/fileToRead.txt');

const read = async () => {
	const fileStream = createReadStream(filePath);

	fileStream.pipe(process.stdout);

	await finished(fileStream);

	console.log('\nFile read successfully.');
};

await read();
