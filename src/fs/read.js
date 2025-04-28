import fs from 'fs/promises';
import path from 'path';

const fileToRead = path.join(
	new URL('.', import.meta.url).pathname,
	'files',
	'fileToRead.txt'
);
const read = async () => {
	try {
		await fs.access(fileToRead);
		throw new Error('FS operation failed');
	} catch (error) {
		if (error.code === 'ENOENT') {
			console.log('File does not exist.');
			return;
		}
	}
	const fileContent = await fs.readFile(fileToRead, 'utf-8');
    console.log(`Content of ${fileToRead} is:`);
    console.log('-------------------');
    console.log(fileContent);
    console.log('-------------------');
    console.log('File read successfully!');
};

await read();
