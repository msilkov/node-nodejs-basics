import fs from 'fs/promises';
import path from 'path';

const fileToRemove = path.join(
	new URL('.', import.meta.url).pathname,
	'files',
	'fileToRemove.txt'
);
const remove = async () => {
	try {
		await fs.access(fileToRemove);
		throw new Error('FS operation failed');
	} catch (error) {
		if (error.code === 'ENOENT') {
			console.log('File does not exist.');
			return;
		}
	}

	await fs.unlink(fileToRemove);
	console.log('File removed successfully!');
};

await remove();
