import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(
	new URL('.', import.meta.url).pathname,
	'files',
	'fresh.txt'
);

const create = async () => {
	try {
		await fs.access(filePath);
		throw new Error('FS operation failed');
	} catch (error) {
		if (error.code === 'ENOENT') {
			await fs.writeFile(filePath, 'I am fresh and young');
			console.log('File created successfully!');
		} else {
			console.log('File already exists.');
		}
	}
};

await create();
