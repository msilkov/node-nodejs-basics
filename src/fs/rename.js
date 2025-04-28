import fs from 'fs/promises';
import path from 'path';

const oldFileName = path.join(
	new URL('.', import.meta.url).pathname,
	'files',
	'wrongFilename.txt'
);

const properFileName = path.join(
	new URL('.', import.meta.url).pathname,
	'files',
	'properFilename.md'
);

const rename = async () => {
	try {
		await fs.access(oldFileName);
		throw new Error('FS operation failed');
	} catch (error) {
		if (error.code === 'ENOENT') {
			console.log('File does not exist.');
			return;
		}
	}

	try {
		await fs.access(properFileName);
		throw new Error('FS operation failed');
	} catch (error) {
		if (error.code === 'ENOENT') {
			await fs.rename(oldFileName, properFileName);
			console.log('File renamed successfully!');
		} else {
			console.log('Destination file already exists.');
		}
	}
};

await rename();
